import { Route, Switch } from 'react-router-dom';
import BookingSummaryCard from '../components/BookingSummaryCard';
import BusList from '../components/BusList';
import ContactForm from '../components/ContactForm';
import PaymentDetailsForm from '../components/PaymentDetailsForm';
import SafetyCard from '../components/SafetyCard';
import SelectedBusDetails from '../components/SelectedBusDetailsCard';
import TabView from '../components/shell/Shell';


export default (
    <Switch>
        <Route component={BusList} path='/components/buslist' />
        <Route component={SelectedBusDetails} path='/components/selectedbus' />
        <Route component={SafetyCard} path='/components/safety' />
        <Route component={ContactForm} path='/components/contactform' />
        <Route component={PaymentDetailsForm} path='/components/paymentform' />
        <Route component={BookingSummaryCard} path='/components/bookingsummary' />
        <Route component={TabView} path='/' />
    </Switch>
);
