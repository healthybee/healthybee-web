const createMenu = () => {
  return {
    data: {
      title: 'SEE ALL',
      totalOpenRestaurants: 0,
      cards: [
        {
          type: 'restaurant',
          data: {
            type: 'F',
            id: '132058',
            name: 'Silver spoon',
            uuid: 'decc82da-6693-4035-9bb2-16ff921800f6',
            city: '6',
            area: 'Nigdi',
            totalRatingsString: 'Too Few Ratings',
            cloudinaryImageId: 'bbnjanz8hodvisfgfchr',
            cuisines: ['North Indian', 'South Indian', 'Seafood', 'Chinese'],
            tags: [],
            costForTwo: 40000,
            costForTwoString: '₹400 FOR TWO',
            deliveryTime: 42,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            slaString: '42 MINS',
            lastMileTravel: 5.138000011444092,
            slugs: {
              restaurant: 'silver-spoon-nigdi-nigdi',
              city: 'pune',
            },
            cityState: '6',
            address:
              'Shop 7, 8, 9, 10, Opposite AkurdiRailway Station, Laregalia, Akurdi, Pune',
            locality: 'Nigdi',
            parentId: 0,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: 'fix',
                  fee: 0,
                  message: '',
                },
                {
                  name: 'distance',
                  fee: 0,
                  message: '',
                },
                {
                  name: 'time',
                  fee: 1300,
                  message: 'Late Night Surge',
                },
                {
                  name: 'special',
                  fee: 0,
                  message: '',
                },
              ],
              totalFees: 1300,
              message: '',
              title: 'Delivery Charge',
              amount: '1300',
              icon: '',
            },
            availability: {
              opened: false,
              nextOpenMessage: 'Opens next at 11 am, tomorrow',
              nextCloseMessage: '',
            },
            longDistanceEnabled: 1,
            rainMode: 'NONE',
            thirdPartyAddress: false,
            thirdPartyVendor: '',
            adTrackingID: '',
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            promoted: false,
            avgRating: '--',
            totalRatings: 0,
            new: false,
          },
          subtype: 'basic',
        },
      ],
    },
  };
};

module.exports = createMenu();
