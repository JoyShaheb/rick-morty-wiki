import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioComponent from "../RadioComponent/RadioComponent";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetCharacterFilters } from "../../../store";

const CharacterFilter = () => {
  const speciesOptions = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const statusOptions = ["Alive", "Dead", "Unknown"];
  const gendersOptions = ["female", "male", "genderless", "unknown"];

  const dispatch = useDispatch();
  const {
    filter: { searchTerm, status, species, gender },
  } = useSelector((state: any) => state);

  return (
    <div>
      <Stack direction="column" mb={1}>
        <Typography textAlign="center" variant="h6">
          Filters
        </Typography>
        <Button onClick={() => dispatch(resetCharacterFilters())}>Reset</Button>
      </Stack>
      {/* status */}
      <Accordion defaultExpanded={status !==''}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioComponent
            options={statusOptions}
            value={status}
            onChange={(e) =>
              dispatch(setFilters({ name: "status", value: e.target.value }))
            }
          />
        </AccordionDetails>
      </Accordion>
      {/* Species */}
      <Accordion defaultExpanded={species !==''}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioComponent
            options={speciesOptions}
            value={species}
            onChange={(e) =>
              dispatch(setFilters({ name: "species", value: e.target.value }))
            }
          />
        </AccordionDetails>
      </Accordion>
      {/* Gender */}
      <Accordion defaultExpanded={gender !==''}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioComponent
            options={gendersOptions}
            value={gender}
            onChange={(e) =>
              dispatch(setFilters({ name: "gender", value: e.target.value }))
            }
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CharacterFilter;
