import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

// Mockup images (replace with actual images)
const burgerLogo = require('../assets/burger.png');
const productLogo = require('../assets/product.png');
const facebookLogo = require('../assets/facebook.png');
const googleLogo = require('../assets/google.png');
const netflixLogo = require('../assets/netflix.png');
const ibmLogo = require('../assets/ibm.png');
const amazonLogo = require('../assets/amazon.png');

// JobCard Component
const JobCard = ({ title, company, salary, location, logo }) => {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

// PopularJobs Component
const PopularJobs = () => {
  const jobCards = [
    { title: "Jr Executive", company: "Burger King", salary: "$96,000/y", location: "Los Angeles, US", logo: burgerLogo },
    { title: "Product Manager", company: "Beats", salary: "$84,000/y", location: "Florida, US", logo: productLogo },
    { title: "Account Manager", company: "Salesforce", salary: "$86,000/y", location: "San Francisco, US", logo: facebookLogo },
    { title: "Business Analyst", company: "Accenture", salary: "$86,000/y", location: "Chicago, US", logo: facebookLogo },
    { title: "Systems Engineer", company: "Cisco", salary: "$86,000/y", location: "San Jose, US", logo: facebookLogo },
    { title: "Graphic Designer", company: "Adobe", salary: "$86,000/y", location: "San Francisco, US", logo: facebookLogo },
    { title: "Customer Manager", company: "HubSpot", salary: "$86,000/y", location: "Boston, US", logo: facebookLogo },
    { title: "Network Engineer", company: "AT&T", salary: "$105,000/y", location: "Dallas, US", logo: facebookLogo },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.heading}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.cardList}>
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </View>
    </View>
  );
};

// FeaturedJobs Component
const FeaturedJobs = () => {
  const jobCards = [
    { title: "Software Engineer", company: "Facebook", salary: "$180,000/y", location: "Accra, Ghana", logo: facebookLogo },
    { title: "Jr Developer", company: "Google", salary: "$160,000/y", location: "California, US", logo: googleLogo },
    { title: "Product Manager", company: "Facebook", salary: "$120,000/y", location: "New York, US", logo: facebookLogo },
    { title: "DevOps Engineer", company: "Netflix", salary: "$150,000/y", location: "Los Gatos, US", logo: netflixLogo },
    { title: "Blockchain Developer", company: "IBM", salary: "$150,000/y", location: "New York, US", logo: ibmLogo },
    { title: "Marketing Manager", company: "Tesla", salary: "$150,000/y", location: "Palo Alto, US", logo: amazonLogo },
    { title: "UX Designer", company: "Apple", salary: "$150,000/y", location: "Cupertino, US", logo: amazonLogo },
    { title: "Data Scientist", company: "Microsoft", salary: "$140,000/y", location: "Redmond, US", logo: amazonLogo },
  ];

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.heading}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ScrollView>
    </View>
  );
};

// HomeScreen Component
const HomeScreen = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <Image
            style={styles.profilePicture}
            source={require('../assets/Ellipse.png')}
          />
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <ScrollView>
        <FeaturedJobs searchQuery={searchQuery} />
        <PopularJobs searchQuery={searchQuery} />
      </ScrollView>
      <Image
        style={styles.topRightProfilePicture}
        source={require('../assets/Ellipse.png')}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    paddingBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
  },
  topRightProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  name: {
    fontSize: 24,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  email: {
    fontSize: 16,
    color: '#7f8c8d',
    marginLeft: 20,
  },
  searchInput: {
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  seeAll: {
    fontSize: 16,
    color: '#3498db',
  },
  cardList: {
    flexDirection: 'column',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'GREY',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: 'green',
  },
});

export default HomeScreen;
