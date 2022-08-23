import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import requests from "../../Requests/requests";

export default function PaginationRounded() {
  const router = useRouter();

  const pageHandler = (e, value) => {
    e.preventDefault()
    const path = window.localStorage.getItem("path");
    router.push(`/?current=${path}&page=${value}`);
  };
  return (
    <div className="flex items-center justify-center my-8 ">
      <Stack spacing={2} style={{ margin: "0 auto", display:'flex ', justifyContent:"center", alignItems:'center' }}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => pageHandler(e, value)}
        />
      </Stack>
    </div>
  );
}
