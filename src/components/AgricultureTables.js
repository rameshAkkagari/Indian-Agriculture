
import React from 'react';
import { Table, Container, Title, Divider } from '@mantine/core';
import { processData } from '../utils/dataProcessing';

const tableStyles = {
    tabel:{
        borderCollapse: "collapse",
        
    },
  thead: {
    backgroundColor: '#f5f5f5',
    
  },
  th: {
    fontWeight: 'bold',
    padding: '8px',
    textAlign: 'left',
    border:"1px solid black"
  },
  td: {
    padding: '8px',
    textAlign: 'left',
    border:"1px solid black"
  },
  tr: {
    borderBottom: '1px solid #e0e0e0',
    border:"1px solid black"
  },
};

const AgricultureTables = () => {
  const { aggregatedData, cropAverageData } = processData();

  return (
    <Container>
      <Title order={1}>Agriculture Data</Title>

      <Title order={2} mt="md">Year-wise Maximum and Minimum Crop Production</Title>
      <Divider my="sm" />
      <Table style={tableStyles.tabel} striped highlightOnHover horizontalSpacing="xl" verticalSpacing="md">
        <Table.Thead style={tableStyles.thead}>
          <Table.Tr>
            <Table.Td style={tableStyles.th}>Year</Table.Td>
            <Table.Td style={tableStyles.th}>Crop with Maximum Production</Table.Td>
            <Table.Td style={tableStyles.th}>Crop with Minimum Production</Table.Td>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {aggregatedData.map(data => (
            <Table.Tr key={data.year} style={tableStyles.tr}>
              <Table.Td style={tableStyles.td}>{data.year}</Table.Td>
              <Table.Td style={tableStyles.td}>{data.maxCrop}</Table.Td>
              <Table.Td style={tableStyles.td}>{data.minCrop}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Title order={2} mt="md">Crop-wise Average Yield and Cultivation Area (1950-2020)</Title>
      <Divider my="sm" />
      <Table style={tableStyles.tabel} striped highlightOnHover>
        <Table.Thead style={tableStyles.thead}>
          <Table.Tr>
            <Table.Th style={tableStyles.th}>Crop</Table.Th>
            <Table.Th style={tableStyles.th}>Average Yield</Table.Th>
            <Table.Th style={tableStyles.th}>Average Cultivation Area</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {cropAverageData.map(data => (
            <Table.Tr key={data.crop} style={tableStyles.tr}>
              <Table.Td style={tableStyles.td}>{data.crop}</Table.Td>
              <Table.Td style={tableStyles.td}>{data.avgYield}</Table.Td>
              <Table.Td style={tableStyles.td}>{data.avgArea}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default AgricultureTables;
