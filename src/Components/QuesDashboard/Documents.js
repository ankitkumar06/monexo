import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';

import { visuallyHidden } from '@mui/utils';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Button from '@mui/material/Button';
import { useEffect,useCallback } from "react";
import axios from 'axios';
import env from '../../enviorment.json';
// import json from '../DashboardUi/demo-data.json';
import  { useState } from "react";
import classes from '../DashboardUi/EnhancedT.module.css';



function createData(doc_type, doc_name, password, file_type, file_size,uploaded_date,view,edit) {
    return {
        doc_type,
        doc_name,
        password,
        file_type,
        file_size,
        uploaded_date,
        view,
        edit
    };
  }
  
  const rows = [
    createData('Aadhar Front', 'Aadhar-front.PDF', '-', 'PDF', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
    createData('Aadhar Back', 'Aadhar-front.PDF', '-', 'PDF', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
    createData('Selfie', 'image.jpge', '-', 'JPGE', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
    createData('Office/College ID Front', 'image.jpge', '-', 'JPGE', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
    createData('Video KYC Response URL', 'image.jpge', '-', 'PDF', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
    createData('Payslip', 'image.jpge', 'GNPOS24996', 'PDF', '3MB','10-10-2021',<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px',left:'40px'}}startIcon={<VisibilityOutlinedIcon />}></Button>,<Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<ModeEditOutlineOutlinedIcon />}></Button>),
  ];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'doc_type',
    numeric: false,
    disablePadding: true,
    label: 'Document Type',
  },
  {
    id: 'doc_name',
    numeric: false,
    disablePadding: false,
    label: 'Document Name',
  },
  {
    id: 'password',
    numeric: false,
    disablePadding: false,
    label: 'Password',
  },
  {
    id: 'file_type',
    numeric: false,
    disablePadding: false,
    label: 'File Type',
  },
  {
    id: 'file_size',
    numeric: false,
    disablePadding: false,
    label: 'File Size',
  },
  {
    id: 'uploaded_date',
    numeric: false,
    disablePadding: false,
    label: 'Uploaded date',
  },
 ,
  {
    id: 'view'
  },
  {
    id: 'edit'
  },

];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (

    <TableHead
    sx={{
        backgroundColor: "#EAF4EB",
        
        borderBottom: "0.10 rem solid black",
        "& th": {
          color: "rgba(96, 96, 96)"
        }
      }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon={ true ? headCell.id== 'doc_type' : false}
              disabled={true ? headCell.id== 'doc_type' : false}
              active={ headCell.id=='doc_name' ||  headCell.id== 'password' ||  headCell.id== 'file_type' ||  headCell.id== 'file_size' ||   headCell.id== 'uploaded_date' ||  orderBy === headCell.id }
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Documents(props ,{parentCallback}) {
//  const {setData} =props;

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rows, setJsondata] = useState();
  const [datarender , setdataRender] = useState(false);
//   const [rows, setRowsData] = useState([]);
  const [paginationVal, setPagination] = useState(0);
  const [countData, setCountData] = useState(0);
  const [isload, setIsLoading] =useState(false)
  const [tmproryrows,setTemporaryRows] = useState([]);
  const [isRecord, setIsRecord] = useState(false)



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    // const fetchCustomerDataHandler =async () =>{
    //     try {
    //         let valrequired={
              
    //           }
    //       const token =localStorage.getItem("token")
    //       setIsLoading(true)
    //       await axios.post(env.apiUrl + 'api/users/dashboard/',valrequired,
    //       {
    //          headers: {"Authorization" : `Bearer ${token}`}
  
    //       }).then(res =>{
    //         let rowsval = res.data.response
  
            
            
    //           rowsval.map((item) => (
    //             item.view = <Button variant="outlined" style={{borderBlockColor:'green',color:'green',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<EditIcon />}></Button>,
    //             item.edit = <Button variant="outlined" style={{borderBlockColor:'green',color:'green',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<RoomIcon />}></Button>
    //             // key={item.id}
    //           ))
            
    //         props.setData(rowsval);
    //         setRowsData(rowsval)
    //         setIsLoading(false)
    //         setdataRender(true);
    //         if(rowsval.length == 0)
    //         {
    //           setIsRecord(true)
    //         }
           
           
    //       })
    
    //     // } 
    //   }catch (error) {
    //       console.log(error)
    //       // alert("Please login again")
    //       // navigate('/dashboard')
    //     }
    //   }

    //   useEffect(() =>{

       
    //     fetchCustomerDataHandler();
       
    //   },[])

  return (
    <div>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
            //   rowCount={countData}
                rowCount={rows.length}
            />
            {/* {isload && <h3>Loading...</h3>}
            { isRecord && !isload && <h3>No Record Found</h3>}
               { datarender && !isload && !isRecord && */}
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                 
                    <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}              
                    >

                      <TableCell component="th" scope='row' id={labelId} align="left">{row.doc_type}</TableCell>
                      <TableCell align="left">{row.doc_name}</TableCell>
                      <TableCell align="left">{row.password}</TableCell>
                      <TableCell align="left">{row.file_type}</TableCell>
                      <TableCell align="left">{row.file_size}</TableCell>
                      <TableCell align="left">{row.uploaded_date }</TableCell>
                      <TableCell align="left">{row.view }</TableCell>
                      <TableCell align="left">{row.edit }</TableCell> 
                    </TableRow>

                  );
                })}
             
            </TableBody>
{/* } */}
          </Table>
        </TableContainer>
       
        </div>
         
    
    
  );
}
