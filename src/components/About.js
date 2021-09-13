import { Typography,Grid,Box, Avatar, Card, Paper } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

function About(){
    return(
        <StylesProvider injectFirst>
            <Box className="h-full">
            <Grid container className="my-8 ">
                <Grid item xs={12} className="mx-72 px-10 ">
                    <Typography className="mb-6" align="center" variant="h2">About</Typography>
                    <Typography align="left" variant="h6">
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                    </Typography>
                </Grid>
                <Grid container spacing={4} item xs={12} className="px-10 mt-8">
                    <Grid item xs={4}>
                        <Card className="px-4 py-4">
                            <Avatar/>
                            <Typography variant="h5">Vitali Kozokin</Typography>
                            <Typography variant="subtitle1">lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd</Typography>
                        </Card>
                        
                    </Grid>
                    <Grid item xs={4}>
                    <Card className="px-4 py-4">
                            <Avatar/>
                            <Typography variant="h5">Eli Ben Hamo</Typography>
                            <Typography variant="subtitle1">lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkflknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd sjdkfjsd</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card className="px-4 py-4">
                            <Avatar/>
                            <Typography variant="h5">Daniel Orkabi</Typography>
                            <Typography variant="subtitle1">lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                            lknskldf ksdfmkl sdfjsdflknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd
                        lknskldf ksdfmkl sdfjsdf sdjfjsdkf sjdkfjsd sdjfjsdkf sjdkfjsd</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
        </StylesProvider>
    );
}
export default About;