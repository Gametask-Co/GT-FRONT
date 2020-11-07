import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";

import { useAuth } from "../../contents/auth";
import api from "../../services/api";

function MilestoneDetail() {
  const { signed, loading } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/signin");
      } else {
        // api.get("/milestone").then(function (res) {
        //   setMilestones(res.data);
        // });
      }
    }
  }, [signed, history, loading]);

  return (
    <Layout pageTitle="Disciplinas">
      <h1>Milestone Detail</h1>
    </Layout>
  );
}

export default MilestoneDetail;
