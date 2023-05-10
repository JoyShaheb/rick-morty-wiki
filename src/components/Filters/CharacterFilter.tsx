import { Typography, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilter, RootState } from "../../store/index";
import AccordionComponent from "../Accordion/AccordionComponent";
import {
  StatusOptions,
  GenderOptions,
  SpeciesOption,
} from "../../Constants/Constants";

const CharacterFilter = () => {
  const dispatch = useDispatch();
  const { status, species, gender } = useSelector(
    (store: RootState) => store.filter
  );

  return (
    <div>
      <Stack direction="column" mb={1}>
        <Typography textAlign="center" variant="h6">
          Filters
        </Typography>
        <Button onClick={() => dispatch(resetFilter())}>Reset</Button>
      </Stack>
      {/* status */}
      <AccordionComponent
        label="Status"
        options={StatusOptions}
        value={status}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setFilters({ name: "status", value: e.target.value }))
        }
        defaultExpanded={status !== ""}
      />
      {/* Species */}
      <AccordionComponent
        label="Species"
        options={SpeciesOption}
        value={species}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setFilters({ name: "species", value: e.target.value }))
        }
        defaultExpanded={species !== ""}
      />

      {/* Gender */}
      <AccordionComponent
        label="Gender"
        options={GenderOptions}
        value={gender}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setFilters({ name: "gender", value: e.target.value }))
        }
        defaultExpanded={gender !== ""}
      />
    </div>
  );
};

export default CharacterFilter;
