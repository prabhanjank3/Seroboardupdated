import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

// Assets
import { MdCheckCircle, MdCancel, MdFlag,MdAssignment,MdPauseCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ProgressDropdown from "components/custom/progressDropdown";
export default function ColumnsTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='10px' align='center'>
        {/* <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Complex Table
        </Text> */}
        {/* <Menu /> */}
        <ProgressDropdown />
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            
            return (
              <Tr {...row.getRowProps()} key={index} mx="10px">
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "ID") {
                    data = (
                      <Link to={"/home"}>
                      <Text color={"blue"} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                      </Link>
                    );
                  } else if (cell.column.Header === "Progress") {
                    data = (
                      <Flex align='center'>
                        <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            cell.value === "4"
                              ? "green.500"
                              : cell.value === "5"
                              ? "red.500"
                              : cell.value === "3"
                              ? "green.500"
                              : cell.value === "2"
                              ? "orange.500"
                              : cell.value === "1"
                              ? "navy.500"
                              : null
                          }
                          as={
                            cell.value === "4"
                              ? MdCheckCircle
                              : cell.value === "5"
                              ? MdCancel
                              : cell.value === "3"
                              ? MdCheckCircle
                              : cell.value === "2"
                              ? MdPauseCircle
                              : cell.value === "1"
                              ? MdAssignment
                              : null
                          }
                        />
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value === "4"
                              ? "Accepted"
                              : cell.value === "5"
                              ? "Blocked"
                              : cell.value === "3"
                              ? "Completed"
                              : cell.value === "2"
                              ? "In Progress"
                              : cell.value === "1"
                              ? "Defined"
                              :null
                            }
                        </Text>
                      </Flex>
                    );
                  }
                  else if (cell.column.Header === "Title") {
                    data = (
                      <Flex align='center'>
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  }
                  else if (cell.column.Header === "Deadline") {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "PROGRESS") {
                    data = (
                      <Flex align='center'>
                        <Progress
                          variant='table'
                          colorScheme='brandScheme'
                          h='8px'
                          w='108px'
                          value={cell.value}
                        />
                      </Flex>
                    );
                  }
                  else if (cell.column.Header === "Flagged") {
                    data = (
                      <MdFlag color = {(cell.value === true) ?"red":null} fontSize={20} />
                    );
                  } 
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      maxH='30px !important'
                      py='8px'
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor='transparent'>
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
