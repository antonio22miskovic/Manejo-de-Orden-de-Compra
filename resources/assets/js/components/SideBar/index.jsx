import React from 'react'
import {
	List,
	ListItem,
	ListItemText,
  makeStyles,
  Divider,
  Drawer,
  Collapse,
  ListItemIcon
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BookIcon from '@material-ui/icons/Book';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom'
//start useStyles
import {
  orange,
} from '@material-ui/core/colors';
const drawerWidth = 300;  
	const useStyles = makeStyles(theme => ({
		list: {
	    color: 'black',
      height : '100%',
      background : orange[700]

	  },
    line:{
      color:'black'
    },
    itemText:{
      marginLeft:"20px",
    },
    itemButton:{
      margin: theme.spacing(1),
    color: "white",
    padding: "0 0.75rem",
    textDecoration: "none",
    borderColor : 'transparent',
    fontWeight : "bolder",
    '&:hover': {
      color: "black",
    borderColor :'transparent',
    }
    },
	  nested: {
	    paddingLeft: theme.spacing(4),
	  },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
  drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
	}))
//end useStyles
const SideBar = ({toogleSideBar,toggleDrawer,tool}) => {
//start uses
const [open, setOpen] = React.useState(false);
	const classes = useStyles()
//start uses
  
	return (
    <Drawer 
    className={classes.drawer}
    open={toogleSideBar}
    onClose={toggleDrawer(toogleSideBar, false)}
    anchor="left"
    variant="temporary"
    >
        <List component="ul" className={classes.list}>
        <Link to="/">
        <ListItem button className={classes.itemButton} onClick={()=>tool()}>
          <HomeIcon/>
          <ListItemText className={classes.itemText}>
            Inicio
          </ListItemText>
        </ListItem>
        </Link>
        <Divider light={true}/>
        <ListItem button className={classes.itemButton} onClick={() => setOpen(!open)}>
          <AccessibilityNewIcon/>
          <ListItemText className={classes.itemText}>
            Administración de Elementos Básicos
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className={classes.list,classes.itemText}>
            <Link to="/providers">
            <ListItem button className={classes.itemButton} onClick={()=>tool()}>
                <StarBorder />
              <ListItemText className={classes.itemText}>
                Proveedores
              </ListItemText>
            </ListItem>
            </Link>
            <Link to="/categories">
            <ListItem button className={classes.itemButton} onClick={()=>tool()}>
                <StarBorder />
              <ListItemText className={classes.itemText}>
                Categorias
              </ListItemText>
            </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to="/products">
        <ListItem button className={classes.itemButton} onClick={()=>tool()}>
          <BookIcon/>
          <ListItemText className={classes.itemText}>
            Administración de Productos
          </ListItemText>
        </ListItem>
        </Link>
        <Link to="/invoices">
        <ListItem button className={classes.itemButton} onClick={()=>tool()}>
          <LibraryBooksIcon/>
          <ListItemText className={classes.itemText}>
            Órden de Facturación
          </ListItemText>
        </ListItem>
         </Link>
        <Divider></Divider>
      </List>
    </Drawer>
	  
	)
}
export default SideBar;