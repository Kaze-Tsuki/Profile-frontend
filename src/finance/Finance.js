import { useState } from "react";
import Template from "../template/template";
import { FinanceHeader, DefaultFooter } from "../template/headers";

export default function Finance() {

  return (
    <Template
      head={<FinanceHeader />}
      child={<p>Finance</p>}
      foot={<DefaultFooter />}
    />
  );
}