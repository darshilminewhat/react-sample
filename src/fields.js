export default [
    {
        key: 'name',
        name: 'Name',
        field: 'name',
        width: 520,
        create: true,
        fixed : true,
        sort: true,
        sortOptions: {
            "name": "Name",
            "status": "Status",
            "createdat": "Date Created",
            "lastupdatedat": "Date Modified"
        }
    },
    {
        key: 'cai_delivered',
        name: 'Delivered to',
        field: 'cai_delivered',
        width: 150,
        sort: true
    },
    {
        key: 'cai_data_delivered',
        name: 'Data Delivered',
        field: 'cai_data_delivered',
        width: 150,
        sort: true
    },
    {
        key: 'cai_ui_delivered',
        name: 'UI Delivered',
        field: 'cai_ui_delivered',
        width: 150,
        sort: true
    },
    {
        key: 'cai_delivery_rate',
        name: 'Delivery Rate',
        field: 'cai_delivery_rate',
        width: 150,
        sort: true
    },
    {
        key: 'cai_used',
        name: 'People Interacted',
        field: 'cai_used',
        width: 160,
        sort: true
    },
    {
        key: 'engagement_rate',
        name: 'Engagement Rate',
        field: 'engagement_rate',
        width: 155,
        sort: true,
        edit: true
    },
    {
        key: 'cai_impressions',
        name: 'Product Impressions',
        field: 'cai_impressions',
        width: 175,
        sort: true
    },
    {
        key: 'cai_views_intent',
        name: 'Conversion',
        subText: 'VIEWS',
        field: 'cai_views_intent',
        width: 150,
        sort: true
    },
    {
        key: 'cai_rc_clicked',
        name: 'Interacted',
        field: 'cai_rc_clicked',
        width: 150,
        sort: true
    },
    {
        key: 'cai_page_views',
        name: 'Page Views via Choice',
        field: 'cai_page_views',
        width: 185,
        sort: true
    },
    {
        key: 'cai_views_intent',
        name: 'Product Views',
        field: 'cai_views_intent',
        width: 150,
        sort: true
    },
    {
        key: 'cai_caddtocart',
        name: 'Added to Cart',
        field: 'cai_caddtocart',
        width: 150,
        sort: true
    },
    {
        key: 'cai_cpurchases',
        name: 'Purchases',
        field: 'cai_cpurchases',
        width: 150,
        sort: true
    },
    {
        key: 'cai_crevenue',
        name: 'Revenue',
        field: 'cai_crevenue',
        width: 150,
        sort: true
    }
]