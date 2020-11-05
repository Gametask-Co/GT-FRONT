import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";

import { useAuth } from "../../contents/auth";

function MilestoneDetail() {
  return (
    <Layout pageTitle="Disciplinas">
      <h1>Milestone Detail</h1>
    </Layout>
  );
}

export default MilestoneDetail;
