import React from 'react';
import { StyleSheet } from 'react-native';

import { DataTable } from 'react-native-paper';

function AttendanceList({date, punchIn, punchOut}) {
    return (
        
        <DataTable.Row style={{width: 350}}>
                        <DataTable.Cell>{date}</DataTable.Cell>
                        <DataTable.Cell >{punchIn}</DataTable.Cell>
                        <DataTable.Cell >{punchOut}</DataTable.Cell>
        </DataTable.Row>
    );
}

export default AttendanceList;