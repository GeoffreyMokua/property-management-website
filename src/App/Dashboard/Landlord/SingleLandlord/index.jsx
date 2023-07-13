import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const SingleLandlord = () => {
  const [landlordData, setLandlordData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://property-system-node.onrender.com/properties/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setLandlordData(data))
      .catch((error) => {
        console.error("Error fetching landlord data:", error);
      });
  }, [params.id]);

  console.log(landlordData);

  return (
    <Stack>
      <Typography>
        <ArrowBackIcon
          onClick={() => navigate("/dashboard/manage-property")}
          sx={{ cursor: "pointer" }}
        />{" "}
        Back to landlords {typeof params.id}
      </Typography>
      <Stack>{/* s */}</Stack>
    </Stack>
  );
};

export default SingleLandlord;
