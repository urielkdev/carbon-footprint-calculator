import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CARDS } from '../../constants';
import { EmissionsFactorTitleMapper } from '../../mappers';
import { ApiCalculateConsumptionsResType } from '../../types';

const buildRows = (
  calculatedConsumptions: ApiCalculateConsumptionsResType[],
  totalEmissions: number
) => {
  return calculatedConsumptions.map(({ emissionFactor, emissions }) => {
    return {
      name: EmissionsFactorTitleMapper[emissionFactor],
      category: CARDS.filter(
        (card) => card.emissionFactor === emissionFactor
      )[0].category,
      emissions,
      percentage: +((emissions / totalEmissions) * 100).toFixed(2),
    };
  });
};

interface ResultsTableProps {
  calculatedConsumptions: ApiCalculateConsumptionsResType[];
  totalEmissions: number;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  calculatedConsumptions,
  totalEmissions,
}) => {
  const rows = buildRows(calculatedConsumptions, totalEmissions);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">CO2 Emissions (CO2e/yr)</TableCell>
            <TableCell align="right">Percentage %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.emissions}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
