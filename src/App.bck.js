import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, Box, Grid, Typography, Container, TextField, IconButton, Button, List, ListItem, ListItemText, Divider, Avatar, Paper, Badge, Tabs, Tab } from "@mui/material";
import { styled } from "@emotion/react";
import { Search, FavoriteBorder, Home, MenuBook, ChevronRight, Add, Remove, Menu, LocationOn, LocalOffer, NewReleases, Star, AllInclusive } from "@mui/icons-material";

export default function App() {
  return (
    <Container maxWidth="xl" sx={{ padding: 0 }}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={1}
        px={2}
        bgcolor="#ffffff"
        boxShadow={1}
      >
        <Typography variant="h6" sx={{ color: "#333" }}>Food Delivery Template</Typography>
      </Box>

      <Box display="flex" bgcolor="#FFFAF4" height="calc(100vh - 64px)">
        {/* Sidebar */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          pt={2}
          px={1}
          bgcolor="#FFE0CC"
          borderRight={1}
          borderColor="divider"
          width="70px"
        >
          <IconButton><Menu /></IconButton>
          <IconButton><FavoriteBorder /></IconButton>
          <IconButton><Home /></IconButton>
          <IconButton><MenuBook /></IconButton>
        </Box>

        {/* Main Content */}
        <Box display="flex" flexDirection="column" flex={3} px={4} py={3}>
          <Box mb={2} display="flex" alignItems="center" bgcolor="#FFF" borderRadius={2} boxShadow={1}>
            <TextField fullWidth variant="outlined" placeholder="What would you like to eat?" InputProps={{ disableUnderline: true }} sx={{ bgcolor: "#FFF", borderRadius: 2 }} />
            <IconButton>
              <Search />
            </IconButton>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            bgcolor="#FF7043"
            p={2}
            borderRadius={2}
            mb={3}
            sx={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1.5rem" }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>30% Off Fitness Meal</Typography>
          </Box>
          <Tabs value={0} indicatorColor="primary" textColor="primary" centered sx={{ mb: 3 }}>
            <Tab icon={<LocationOn />} label="Nearby" sx={{ textTransform: "none", fontWeight: "bold", color: "#FF7043" }} />
            <Tab icon={<LocalOffer />} label="Promotion" sx={{ textTransform: "none", fontWeight: "bold", color: "#8D8D8D" }} />
            <Tab icon={<NewReleases />} label="Newcomers" sx={{ textTransform: "none", fontWeight: "bold", color: "#8D8D8D" }} />
            <Tab icon={<Star />} label="Best Seller" sx={{ textTransform: "none", fontWeight: "bold", color: "#8D8D8D" }} />
            <Tab icon={<Star />} label="Top Rated" sx={{ textTransform: "none", fontWeight: "bold", color: "#8D8D8D" }} />
            <Tab icon={<AllInclusive />} label="All" sx={{ textTransform: "none", fontWeight: "bold", color: "#8D8D8D" }} />
          </Tabs>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Avatar variant="square" src="/images/food1.jpg" alt="Panera Soup" sx={{ width: "100%", height: 150, mb: 2, borderRadius: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">Panera Soup</Typography>
                <Typography variant="body2" color="textSecondary">Fast-Food</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography variant="h6" fontWeight="bold">&39</Typography>
                  <IconButton><FavoriteBorder /></IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Avatar variant="square" src="/images/food2.jpg" alt="Noodle's" sx={{ width: "100%", height: 150, mb: 2, borderRadius: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">Noodle's</Typography>
                <Typography variant="body2" color="textSecondary">Fast-Food</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography variant="h6" fontWeight="bold">&39</Typography>
                  <IconButton><FavoriteBorder /></IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Avatar variant="square" src="/images/food3.jpg" alt="Panera Soup" sx={{ width: "100%", height: 150, mb: 2, borderRadius: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">Panera Soup</Typography>
                <Typography variant="body2" color="textSecondary">Fast-Food</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography variant="h6" fontWeight="bold">&39</Typography>
                  <IconButton><FavoriteBorder /></IconButton>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                <Avatar variant="square" src="/images/food4.jpg" alt="Burger Mozza XL" sx={{ width: "100%", height: 150, mb: 2, borderRadius: 1 }} />
                <Typography variant="subtitle1" fontWeight="bold">Burger Mozza XL</Typography>
                <Typography variant="body2" color="textSecondary">Fast-Food</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography variant="h6" fontWeight="bold">&39</Typography>
                  <IconButton><FavoriteBorder /></IconButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Order Summary */}
        <Box flex={1} bgcolor="#FFF" p={4} borderRadius={4} boxShadow={2} ml={4} display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Typography variant="h6" mb={2} fontWeight="bold">My Order</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="body1" color="textSecondary">Delivery address</Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" fontWeight="bold">1342 Morris Street</Typography>
                <IconButton><ChevronRight /></IconButton>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem>
                <Box display="flex" alignItems="center" width="100%">
                  <Avatar variant="square" src="/images/food4.jpg" alt="Burger Mozza XL" sx={{ width: 60, height: 60, mr: 2 }} />
                  <Box flex={3} sx={{ pr: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Burger Mozza XL</Typography>
                    <Typography variant="body2" color="textSecondary">Extra Cheese</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="flex-end" flex={1}>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 1 }}><Remove /></IconButton>
                    <Typography mx={1}>1</Typography>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 1 }}><Add /></IconButton>
                  </Box>
                  <Typography ml={2} fontWeight="bold" sx={{ fontSize: "1.25rem", flex: 1, textAlign: 'right' }}>&39</Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Box display="flex" alignItems="center" width="100%">
                  <Avatar variant="square" src="/images/food5.jpg" alt="Burger Mozza XL" sx={{ width: 60, height: 60, mr: 2 }} />
                  <Box flex={3} sx={{ pr: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">Burger Mozza XL</Typography>
                    <Typography variant="body2" color="textSecondary">Extra Cheese</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="flex-end" flex={1}>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 1 }}><Remove /></IconButton>
                    <Typography mx={1}>1</Typography>
                    <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: 1 }}><Add /></IconButton>
                  </Box>
                  <Typography ml={2} fontWeight="bold" sx={{ fontSize: "1.25rem", flex: 1, textAlign: 'right' }}>&39</Typography>
                </Box>
              </ListItem>
            </List>
            <Divider sx={{ my: 3 }} />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography color="textSecondary">Sub Total</Typography>
              <Typography fontWeight="bold" sx={{ fontSize: "1.25rem" }}>&162</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography color="textSecondary">Delivery Fee</Typography>
              <Typography fontWeight="bold" sx={{ fontSize: "1.25rem" }}>&9</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" mt={2} mb={4}>
              <Typography variant="h6" fontWeight="bold">Total</Typography>
              <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.5rem" }}>&171</Typography>
            </Box>
          </Box>
          <Button variant="contained" color="warning" fullWidth sx={{ py: 2, bgcolor: "#FF7043", fontWeight: "bold" }}>
            CHECK OUT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

