"use client";
import Image from "next/image";
import logo from "../../../../../assets/images/vogal.png";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuPrinterCheck } from "react-icons/lu";
import { useGetSinglePaymentQuery } from "../../../../../redux/features/paymentApi/PaymentApi";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const Invoice = ({ params }) => {
  const { data, isLoading } = useGetSinglePaymentQuery(params?.InvoiceId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p>Loading...</p>
      </div>
    );
  }

  const {
    name,
    email,
    number,
    address,
    city,
    thana,
    region,
    price,
    quantity,
    invoiceNumber,
    date,
    time,
    items,
  } = data || {};

  const allItems = [
    ...(items?.items01 || []).map((item) => ({
      title: item.product01,
      quantity: item.quantity01,
      image: item.image01,
    })),
    ...(items?.items02 || []).map((item) => ({
      title: item.product02,
      quantity: item.quantity02,
      image: item.image02,
    })),
  ];
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.text("Invoice", 14, 20);

    doc.setFontSize(12);
    doc.text(`Invoice To: ${name}`, 14, 30);
    doc.text(`Email: ${email}`, 14, 36);
    doc.text(`Phone: ${number}`, 14, 42);
    doc.text(`Address: ${address}, ${thana}, ${city}, ${region}`, 14, 48);

    // Invoice Info
    doc.text(`Invoice No: ${invoiceNumber}`, 140, 30);
    doc.text(`Date: ${date} - ${time}`, 140, 36);

    // Items Table
    const tableData = allItems.map((item, index) => [
      index + 1,
      item.title,
      item.quantity,
      `$${price / quantity}`,
      `$${price / quantity}`,
    ]);

    autoTable(doc, {
      startY: 60,
      head: [["SL", "Product", "Quantity", "Item Price", "Amount"]],
      body: tableData,
    });

    // Summary
    doc.text(`Payment Method: Cash`, 14, doc.lastAutoTable.finalY + 10);
    doc.text(`Shipping Cost: $60.00`, 14, doc.lastAutoTable.finalY + 16);
    doc.text(`Discount: $0.00`, 14, doc.lastAutoTable.finalY + 22);
    doc.setTextColor(255, 0, 0);
    doc.text(
      `Total Amount: $${price + 60}`,
      140,
      doc.lastAutoTable.finalY + 22
    );

    doc.save(`Invoice-${invoiceNumber}.pdf`);
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-3 md:p-10">
      {/* ✅ Header (Not in print) */}
      <h5 className="text-xl font-semibold no-print">Invoice</h5>

      <div
        id="invoice-content"
        className="bg-white md:p-10 rounded-md mt-3 shadow-sm"
      >
        {/* Header */}
        <div className="flex justify-between flex-wrap">
          <div className="text-[#9097A7]">
            <h3 className="text-black font-semibold text-2xl">INVOICE TO</h3>
            <p>{name}</p>
            <p>{number}</p>
            <p>{email}</p>
            <p>
              {address}, {thana}, {city}, {region}
            </p>
          </div>
          <div className="text-right text-[#9097A7] flex flex-col items-end">
            <Image src={logo} alt="logo" height={100} width={100} />
            <p>01963195735</p>
            <p>fuadtalukder25@gmail.com</p>
            <p>Khilkhet, Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="overflow-x-auto mt-5 bg-white">
          <div className="flex gap-32 md:gap-48 flex-wrap">
            <div>
              <p className="font-semibold">DATE</p>
              <span>
                {date} - {time}
              </span>
            </div>
            <div>
              <p className="font-semibold">INVOICE NO</p>
              <span>{invoiceNumber}</span>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full mt-3 border border-gray-200">
            <thead>
              <tr className="text-sm md:text-base bg-gray-200 border-b border-gray-300 text-left">
                <th className="p-2">SL</th>
                <th className="p-2">Product</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Item Price</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item, index) => (
                <tr key={index} className="text-sm border-b border-gray-200">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                    {item.title}
                  </td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">${price / quantity}</td>
                  <td className="p-2">${price / quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div className="w-full bg-gray-200 mt-10 rounded-lg shadow-sm flex justify-between px-6 py-4 text-sm md:text-base flex-wrap gap-5">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Payment Method
              </span>
              <span className="text-gray-800 mt-1">Cash</span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Shipping Cost
              </span>
              <span className="text-gray-800 mt-1">$60.00</span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Discount
              </span>
              <span className="text-gray-800 mt-1">$0.00</span>
            </div>

            <div className="flex flex-col items-end">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Total Amount
              </span>
              <span className="text-red-600 font-bold text-lg mt-1">
                ${price + 60}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-5 mt-7 no-print">
        <button
          onClick={handleDownloadPDF}
          className="flex gap-2 items-center bg-purple-700 text-white py-2 px-8 text-sm rounded-md uppercase hover:bg-purple-800 transition"
        >
          Download Invoice
          <IoCloudDownloadOutline className="text-lg" />
        </button>
        <button
          onClick={handlePrint}
          className="flex gap-2 items-center bg-teal-500 text-white py-2 px-8 text-sm rounded-md uppercase hover:bg-teal-600 transition"
        >
          Print Invoice
          <LuPrinterCheck className="text-lg" />
        </button>
      </div>

      {/* Print Style */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #invoice-content,
          #invoice-content * {
            visibility: visible;
          }
          #invoice-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Invoice;
