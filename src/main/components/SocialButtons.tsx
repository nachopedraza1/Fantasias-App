import "../../theme/scss/global.scss";
import { Grid, List, ListItem, Link } from '@mui/material';

export const SocialButtons: React.FC<{ justify: string }> = ({ justify }) => {
    return (
        <Grid container width="100%" justifyContent={justify}>
            <List className="social-list" sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                <ListItem><Link href="" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab  fa-facebook-messenger" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab fa-whatsapp" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></Link></ListItem>
            </List>
        </Grid>
    )
}
