import { useRouter } from "next/router";
import React, { Component } from "react";

const CampaignShow = () => {
  const { address } = useRouter().query;

  return <h1>{address}</h1>;
};

export default CampaignShow;
