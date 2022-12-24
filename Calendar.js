import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import Timetable from "react-native-calendar-timetable";
import moment from "moment";
import MyItemCard from "./cardcomponent";

import { value, Button } from "@rneui/base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default function App() {

    const [date, setDate] = React.useState("2023-01-01");

    const [from] = React.useState(moment().subtract(3, 'days').toDate());
    const [till] = React.useState(moment().add(3, 'days').toISOString());
    const range = {from, till};

    const [items] = React.useState([
        {
            title: 'Some event',
            startDate: moment().subtract(1, 'hour').toDate(),
            endDate: moment().add(1, 'hour').toDate(),
        },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        initialDate={date}
        firstDay={1}
        onDayPress={(day) => setDate(day.dateString) }
        onDayLongPress={(day) => console.log('onDayLongPress', day) }
        onMonthChange={(date) => console.log('onMonthChange', date) }
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft');
          goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight'); goToNextMonth();
        }}
      />
       <ScrollView>
            <Timetable
                // these two are required
                items={items}
                cardComponent={MyItemCard}

                // provide only one of these if you need to
                date={date} // optional
                range={range} // optional
            />
        </ScrollView>
        <Button
          type="outline"
          buttonStyle={{ width: 40 }}
          containerStyle={{ margin: 5 }}
          disabledStyle={{
            borderWidth: 3,
            borderColor: "#00F"
          }}
          disabledTitleStyle={{ color: "#00F" }}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert("click")}
          title="+"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
    />
    </SafeAreaView>
    );
}