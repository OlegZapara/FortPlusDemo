// import React from 'react'
import { useEffect, useState } from "react";
import { getAllFilesFromStorage } from "../Firebase";

export default function ResourcesPage() {
  const [links, setLinks] = useState<{name:string; url:string}[]>([]);
  useEffect(() => {
    getAllFilesFromStorage("")
    .then(res => setLinks(res));
  }, []);
  return (
    <div>
      {links.map((item, index) => (
        <a key={index} href={item.url}>{item.name}</a>
      ))}
    </div>
  )
}
