import { useState, useEffect } from "react";

const useGenerateUrl = () => {
  const waBaseUrl = "https://wa.me";
  const emailBaseUrl = "mailto";

  function generateUrl(contact, content, contactType) {
    if (contactType === "whatsapp") {
      return `${waBaseUrl}/${contact}?text=${content}`;
    } else {
      return `${emailBaseUrl}:${contact}?subject=${content.subject}&body=${content.body}`;
    }
  }

  return { generateUrl };
};

export default useGenerateUrl;
