import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const SingleProperty = () => {
  const [propertyData, setPropertyData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://property-system-node.onrender.com/properties/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPropertyData(data));
  }, [params.id]);

  console.log(propertyData);

  return (
    <Stack>
      <Stack>
        <Typography>
          <ArrowBackIcon
            onClick={() => navigate("/dashboard/manage-property")}
            sx={{ cursor: "pointer" }}
          />{" "}
          Back to properties {params.id}
        </Typography>
        <Stack>
          {/* s */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleProperty;
