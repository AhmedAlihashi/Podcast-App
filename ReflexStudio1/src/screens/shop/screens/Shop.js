import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
  Layout,
  Text,
  Button,
  Card,
  ButtonGroup,
  Icon,
  CardHeader,
} from '@ui-kitten/components';
import {SimpleCard} from '@paraboly/react-native-card';

import {logoutUser} from '../../../api/auth-api';
import {
  CartButton,
  LogoutButton,
  RefreshButton,
  BackHomeButton,
} from '../../../components/Icons/Icons';

import Logo from '../../../components/Logo';
import StoreList from '../components/StoreList';

export default Shop = ({navigation}) => {
  const [cart, setCart] = useState(true);
  const [select, setSelect] = useState('A');

  const shopSwitch = select => {
    switch (select) {
      case 'B':
        return <StoreList mainHeader="/Shop/Shirts" />;
      case 'C':
        return <StoreList mainHeader="/Shop/Sweaters" />;
      case 'D':
        return <StoreList mainHeader="/Shop/Accessories" />;
      default:
        return <StoreList mainHeader={'/Shop'} />;
    }
  };

  return (
    <Layout style={{flex: 1, backgroundColor: '#A0A1B5'}}>
      <Layout style={styles.buttonGroup}>
        <BackHomeButton navigation={navigation} />
        <CartButton cartNum={0} />
        <RefreshButton press={() => console.log('refresh')} />
      </Layout>

      <Layout style={styles.logo}>
        <Logo height={'100'} />
      </Layout>

      <Layout
        style={{
          flex: 5,
          margin: 10,
          backgroundColor: null,
          alignItems: 'center',
        }}>
        <ButtonGroup status="basic" style={{marginBottom: 10}}>
          <Button onPress={() => setSelect()}>All</Button>
          <Button onPress={() => setSelect('B')}>Shirts</Button>
          <Button onPress={() => setSelect('C')}>Sweaters</Button>
          <Button onPress={() => setSelect('D')}>Accessories</Button>
        </ButtonGroup>

        {shopSwitch(select)}
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    backgroundColor: null,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    backgroundColor: null,
    marginVertical: 15,
    alignSelf: 'center',
  },
});