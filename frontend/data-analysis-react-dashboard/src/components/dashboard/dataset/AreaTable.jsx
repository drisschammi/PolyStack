import "./AreaTable.scss";

const TABLE_HEADS = [
    "Policy ID",
    "Date of Purchase",
    "Customer ID",
    "Fuel",
    "Vehicle Segment",
    "Premium",
    "Bodily Injury Liability",
    "Personal Injury Protection",
    "Property Damage Liability",
    "Collision",
    "Comprehensive",
    "Customer Gender",
    "Customer Income Group",
    "Customer Region",
    "Customer Marital Status",
];

const TABLE_DATA = [
    {
        "Policy_id": 12345,
        "Date of Purchase": "1/16/2018",
        "Customer_id": 400,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 958,
        "bodily injury liability": 0,
        "personal injury protection": 0,
        "property damage liability": 0,
        "collision": 1,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "0- $25K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12346,
        "Date of Purchase": "1/4/2018",
        "Customer_id": 401,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1272,
        "bodily injury liability": 1,
        "personal injury protection": 0,
        "property damage liability": 0,
        "collision": 0,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "South",
        "Customer_Marital_status": 1
    },
    {
        "Policy_id": 12347,
        "Date of Purchase": "1/7/2018",
        "Customer_id": 402,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 2150,
        "bodily injury liability": 0,
        "personal injury protection": 1,
        "property damage liability": 1,
        "collision": 1,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": ">$70K",
        "Customer_Region": "East",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12348,
        "Date of Purchase": "1/7/2018",
        "Customer_id": 403,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 2123,
        "bodily injury liability": 1,
        "personal injury protection": 0,
        "property damage liability": 1,
        "collision": 1,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "West",
        "Customer_Marital_status": 1
    },
    {
        "Policy_id": 12349,
        "Date of Purchase": "1/1/2018",
        "Customer_id": 404,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1110,
        "bodily injury liability": 1,
        "personal injury protection": 1,
        "property damage liability": 1,
        "collision": 1,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 1
    },
    {
        "Policy_id": 12350,
        "Date of Purchase": "1/22/2018",
        "Customer_id": 405,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1571,
        "bodily injury liability": 0,
        "personal injury protection": 0,
        "property damage liability": 1,
        "collision": 0,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12351,
        "Date of Purchase": "1/19/2018",
        "Customer_id": 406,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1030,
        "bodily injury liability": 1,
        "personal injury protection": 1,
        "property damage liability": 1,
        "collision": 1,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12352,
        "Date of Purchase": "1/23/2018",
        "Customer_id": 407,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1732,
        "bodily injury liability": 1,
        "personal injury protection": 1,
        "property damage liability": 1,
        "collision": 0,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12353,
        "Date of Purchase": "1/1/2018",
        "Customer_id": 408,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 2175,
        "bodily injury liability": 0,
        "personal injury protection": 0,
        "property damage liability": 1,
        "collision": 0,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 1
    },
    {
        "Policy_id": 12354,
        "Date of Purchase": "1/20/2018",
        "Customer_id": 409,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1725,
        "bodily injury liability": 0,
        "personal injury protection": 0,
        "property damage liability": 0,
        "collision": 1,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12355,
        "Date of Purchase": "1/28/2018",
        "Customer_id": 410,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1805,
        "bodily injury liability": 0,
        "personal injury protection": 1,
        "property damage liability": 0,
        "collision": 1,
        "comprehensive": 0,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 1
    },
    {
        "Policy_id": 12356,
        "Date of Purchase": "1/17/2018",
        "Customer_id": 411,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1552,
        "bodily injury liability": 1,
        "personal injury protection": 1,
        "property damage liability": 0,
        "collision": 0,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    },
    {
        "Policy_id": 12357,
        "Date of Purchase": "1/29/2018",
        "Customer_id": 412,
        "Fuel": "CNG",
        "VEHICLE_SEGMENT": "A",
        "Premium": 1888,
        "bodily injury liability": 0,
        "personal injury protection": 1,
        "property damage liability": 1,
        "collision": 1,
        "comprehensive": 1,
        "Customer_Gender": "Male",
        "Customer_Income group": "$25-$70K",
        "Customer_Region": "North",
        "Customer_Marital_status": 0
    }
];

const AreaTable = () => {
    return (
        <section className="content-area-table">
            <div className="data-table-info">
                <h4 className="data-table-title">DataSet Insurance Client</h4>
            </div>
            <div className="data-table-diagram">
                <table>
                    <thead>
                        <tr>
                            {TABLE_HEADS?.map((th, index) => (
                                <th key={index}>{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_DATA?.map((dataItem) => {
                            return (
                                <tr key={dataItem.Policy_id}>
                                    <td>{dataItem.Policy_id}</td>
                                    <td>{dataItem["Date of Purchase"]}</td>
                                    <td>{dataItem.Customer_id}</td>
                                    <td>{dataItem.Fuel}</td>
                                    <td>{dataItem.VEHICLE_SEGMENT}</td>
                                    <td>${dataItem.Premium.toFixed(2)}</td>
                                    <td>{dataItem["bodily injury liability"]}</td>
                                    <td>{dataItem["personal injury protection"]}</td>
                                    <td>{dataItem["property damage liability"]}</td>
                                    <td>{dataItem.collision}</td>
                                    <td>{dataItem.comprehensive}</td>
                                    <td>{dataItem["Customer_Gender"]}</td>
                                    <td>{dataItem["Customer_Income group"]}</td>
                                    <td>{dataItem["Customer_Region"]}</td>
                                    <td>{dataItem["Customer_Marital_status"]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AreaTable;