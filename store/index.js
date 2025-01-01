import {configureStore} from "@reduxjs/toolkit";
import AllPolicyReducer from "./reducers/AllPolicyReducer";
import PersonalOffersReducer from "./reducers/PersonalOffersReducer";
import BusinessOfferReducer from "./reducers/BusinessOfferReducer";
import DataAnalystReducer from "./reducers/DataAnalystReaducer";
import PremiumReducer from "./reducers/PremiumReducer";
import CarDetailsReducer from "./reducers/CarDetails";


const store = configureStore({
    reducer:{
        allPolicy: AllPolicyReducer,
        personalOffers: PersonalOffersReducer,
        businessOffer: BusinessOfferReducer,
        dataAnalyst: DataAnalystReducer,
        premiumData : PremiumReducer,
        carData : CarDetailsReducer
    }
})

export default store;