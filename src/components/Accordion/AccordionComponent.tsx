import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RadioComponent from "../Filters/RadioComponent/RadioComponent";
import { FC } from "react";

interface IAccordionComponentProps {
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultExpanded?: boolean;
}

const AccordionComponent: FC<IAccordionComponentProps> = ({
  label,
  value,
  options,
  onChange,
  defaultExpanded,
}) => {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RadioComponent options={options} value={value} onChange={onChange} />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
