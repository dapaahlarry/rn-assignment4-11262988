import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import FeaturedJobs from './FeaturedJobs';
import PopularJobs from './PopularJobs';
import Head from './head';
import { featuredJobs, popularJobs } from './jobs';

const User = () => {
    return (
        <View style={styles.container}>
            <Head
                name="Larry"
                email="dapaahlarry00@gmail.com"
                avatar="https://th.bing.com/th/id/OIP.xTl33SX53rovU1wa8vMgqQAAAA?pid=ImgDet&w=100&h=100&c=7&dpr=1.5"
      />
            <SearchBar />
            <FeaturedJobs jobs={featuredJobs} />
            <PopularJobs jobs={popularJobs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default User;
