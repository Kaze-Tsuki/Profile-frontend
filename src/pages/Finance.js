import { useState } from "react";
import Template from "../controls/template";
import { FinanceHeader, DefaultFooter } from "../controls/headers";

export default function Finance() {

  return (
    <Template
      head={<FinanceHeader />}
      child={<p>Finance</p>}
      foot={<DefaultFooter />}
    />
  );
}