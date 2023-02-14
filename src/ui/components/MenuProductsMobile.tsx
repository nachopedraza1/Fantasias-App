import { Link as RouterLink } from 'react-router-dom';

import { Typography, AccordionSummary, ListItemIcon, ListItem, Accordion, AccordionDetails, ListItemText } from '@mui/material';
import { ExpandMore, ShoppingCart } from '@mui/icons-material';

const productsItem = [
    { id: 1, text: "Jugueteria", path: "/products/jugueteria" },
    { id: 2, text: "Libreria", path: "/products/libreria" },
    { id: 3, text: "Regaleria", path: "/products/regaleria" },
    { id: 4, text: "Bijouterie", path: "/products/bijouterie" },
    { id: 5, text: "Bazar", path: "/products/bazar" },
    { id: 6, text: "Otros", path: "/products/otros" },
];

export const MenuProductsMobile: React.FC = () => {
    return (
        <ListItem sx={{ color: "white" }} >
            <ListItemIcon sx={{ color: "primary.main" }}>
                <ShoppingCart />
            </ListItemIcon>
            <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                <AccordionSummary sx={{ padding: 0 }} expandIcon={<ExpandMore color="primary" />}>
                    <Typography> Productos</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {productsItem.map(({ id, text, path }) => (
                        <ListItem component={RouterLink} to={path} key={id}>
                            <ListItemText key={id} primary={text} />
                        </ListItem>
                    ))}
                </AccordionDetails>
            </Accordion>
        </ListItem>
    )
}


