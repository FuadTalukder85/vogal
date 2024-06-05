"use client";
// import { useDispatch, useSelector } from "react-redux";

// export const useAppDispatch = () => useDispatch();
// export const useAppSelector = useSelector;

import { useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
