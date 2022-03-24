import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import { useEffect,useCallback } from "react";
import axios from 'axios';
import env from '../../enviorment.json';
import json from './demo-data.json';
import  { useState } from "react";
import classes from './EnhancedT.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";


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
    id: 'customer_id',
    numeric: false,
    disablePadding: true,
    label: 'Cust ID',
  },
  {
    id: 'Cust Name',
    numeric: false,
    disablePadding: false,
    label: 'Cust Name',
  },
  {
    id: 'App_ID',
    numeric: false,
    disablePadding: false,
    label: 'App ID',
  },
  {
    id: 'completed_date',
    numeric: false,
    disablePadding: false,
    label: 'Completed Time',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'loan_product',
    numeric: false,
    disablePadding: false,
    label: 'Loan Product',
  },
  {
    id: 'beaure_score',
    numeric: false,
    disablePadding: false,
    label: 'Bureau Score',
  },
  {
    id: 'user_stage',
    numeric: false,
    disablePadding: false,
    label: 'Stage',
  },
  {
    id: 'loan_offered',
    numeric: false,
    disablePadding: false,
    label: 'Loan Offered',
  },
  {
    id: 'user',
    numeric: false,
    disablePadding: false,
    label: 'User',
  },
  {
    id: 'Call'
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
        // wordWrap:'normal',
        // gap:"50px",
        borderBottom: "0.10 rem solid black",
        "& th": {
          color: "rgba(96, 96, 96)"
        }
      }}>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              hideSortIcon={ true ? headCell.id== 'App_ID' || headCell.id== 'Call' || headCell.id== 'Cust Name': false}
              disabled={true ? headCell.id== 'App_ID' || headCell.id== 'Call' || headCell.id== 'Cust Name': false}
              active={ headCell.id=='customer_id' ||  headCell.id== 'completed_date' ||  headCell.id== 'city' ||  headCell.id== 'loan_product' ||   headCell.id== 'beaure_score'|| headCell.id== 'user_stage' ||   headCell.id== 'loan_offered'||   headCell.id== 'user' ||  orderBy === headCell.id }
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
      {/* {numSelected > 0 ? (
        // <Typography
        //   sx={{ flex: '1 1 100%' }}
        //   color="inherit"
        //   variant="subtitle1"
        //   component="div"
        // >
        //   {numSelected} selected
        // </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )} */}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Downgrade(props ,{parentCallback}) {
//  const {setData} =props;
  const token = useSelector((state)=>state.authRedux.token)
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState();
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const [rows, setJsondata] = useState();
  const [datarender , setdataRender] = useState(false);
  const [rows, setRowsData] = useState([]);
  const [paginationVal, setPagination] = useState(0);
  const [countData, setCountData] = useState(0);
  const [isload, setIsLoading] =useState(false)
  const [tmproryrows,setTemporaryRows] = useState([]);
  const [isRecord, setIsRecord] = useState(false)
  let storetempdata = [];
  const navigate = useNavigate();

  
  
    // React.useEffect(() => {
    //   childFunc.current = fetchCustomerDataHandler
    //   }, [])

  
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
    console.log("table row click" + name)

    localStorage.setItem("custID",name.customer_id)
    localStorage.setItem("custName",name.customer_name)
    localStorage.setItem("appID",name.app_id)
    navigate('/questionnaire')
    // localStorage.setItem("custID",name)
    // const selectedIndex = selected.indexOf(name);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1)
    //   );
    // }

    // setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    console.log(event);
    console.log(newPage);
    let pagecount = newPage * 10
    setPagination(pagecount);
    // fetchCustomerDataHandler()
    setPage(newPage);
 
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const fetchCustomerDataHandler =async () =>{
      try {
      

        let today = new Date(props.startDate);
        let startdateVal  = today.getFullYear() + "-"+today.getMonth()  + "-" +today.getDate();
        let endDateVal  = props.endDate.getFullYear() + "-"+props.endDate.getMonth()  + "-" +props.endDate.getDate() ;
        if(startdateVal === endDateVal)
        {
          props.startDate.setDate(props.startDate.getDate() - 10)
        }
        startdateVal  = today.getFullYear() + "-"+today.getMonth()  + "-" +today.getDate();

        // if(startdateVal < endDateVal)
        // {

        let valrequired={
          search: props.searchVal,
          from_date: startdateVal,
          to_date:endDateVal
        }

        // const token =localStorage.getItem("token")
        setIsLoading(true)
        await axios.post(env.apiUrl + 'api/users/dashboard/',valrequired,
        {
           headers: {"Authorization" : `Bearer ${token}`}

        }).then(res =>{
          // console.log("demo url" + res.data.response.response)
          let rowsval = res.data.response

          if(props.searchVal != "")
          {
            rowsval.call = <Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<CallIcon />}></Button>
            setCountData(1);
          }
          else{
            rowsval.map((item) => (
              item.call = <Button variant="outlined" style={{borderBlockColor:'#61C261',color:'#61C261',paddingRight:'6px',paddingLeft:'16px',paddingBottom:'1px',maxWidth:'5px',minWidth:'5px'}}startIcon={<CallIcon />}></Button>
              // key={item.id}
            ))
            let pgcount = res.data.pagination.total_pages
            setCountData(pgcount);
            setIsLoading(false)
          }
          props.setData(rowsval);
          setRowsData(rowsval)
          setIsLoading(false)
          setdataRender(true);
          if(rowsval.length == 0)
          {
            setIsRecord(true)
          }
         
         
        })
  
      // } 
    }catch (error) {
        console.log(error)
        // alert("Please login again")
        // navigate('/dashboard')
      }
    }
  
    useEffect(() =>{

      // setdataRender(true)
      // const dashboard = {
      //   search: props.searchVal,
      //   startdate: props.startDate,
      //   endDate :props.endDate
      // };
    
      fetchCustomerDataHandler();
      // console.log(dashboard)
    },[props.searchVal,props.startDate,props.endDate])
  
    const tablerowClickHandler = () =>{

      // console.log("table row click" + values)
     
    }
  
    // useEffect(() => {
    //   fetchCustomerDataHandler();
    // }, []);

  


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
              rowCount={countData}
            />
            {isload && <h3>Loading...</h3>}
            { isRecord && !isload && <h3>No Record Found</h3>}
               { datarender && !isload && !isRecord &&
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
                    style={{ whiteSpace:'nowrap' ,textOverflow: 'ellipsis',overflow:'hidden'}}
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> */}
                        
                      <TableCell
                        
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        className={classes.rowCursor}
                        onClick={tablerowClickHandler} 
                      >
                        {row.customer_id}
                      </TableCell>
                      <TableCell  align="left" className={classes.rowCursor} onClick={tablerowClickHandler} >{row.customer_name}</TableCell>
                      <TableCell align="left" className={classes.rowCursor} onClick={tablerowClickHandler} >{row.app_id}</TableCell>
                      <TableCell align="left">{row.completed_date}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="left">{row.loan_product}</TableCell>
                      <TableCell  style={{ whiteSpace:'nowrap',textOverflow: 'ellipsis',overflow:'hidden' }}align="left">{row.beaure_score}</TableCell>
                      <TableCell align="left">{row.user_stage}</TableCell>
                      <TableCell align="left">{row.loan_offered}</TableCell>
                      <TableCell align="left">{row.user }</TableCell>
                      <TableCell align="left">{row.call}</TableCell>
                    </TableRow>

     
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={countData}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
         
    
    
  );
}
