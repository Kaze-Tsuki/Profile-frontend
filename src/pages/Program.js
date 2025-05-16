import { useState } from "react";
import Template from "../controls/template";
import { ProgramHeader, DefaultFooter } from "../controls/headers";

export default function Program() {

  return (
    <Template
      head={<ProgramHeader />}
      child={<p>Program</p>}
      foot={<DefaultFooter />}
    />
  );
}