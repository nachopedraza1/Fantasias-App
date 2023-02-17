import { Grid, List, ListItem, Link } from '@mui/material';

export const SocialButtons: React.FC = () => {
    return (
        <Grid container justifyContent="center" position="absolute" bottom="5%" left={0} right={0}>
            <List className="social-list" sx={{ display: "flex", flexDirection: "row", padding: 0 }}>
                <ListItem><Link href="" target="_blank"><i className="fab fa-twitter" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab  fa-facebook-messenger" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab fa-whatsapp" aria-hidden="true"></i></Link></ListItem>
                <ListItem><Link href="" target="_blank"><i className="fab fa-instagram" aria-hidden="true"></i></Link></ListItem>
            </List>
        </Grid>
    )
}
