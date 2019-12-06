# Vue date range picker light

> Vue2 date range picker based on https://github.com/dangrossman/bootstrap-daterangepicker with date-fns (no jQuery)

Date range picker component for vue made without jQuery dependency. Heavily inspired by bootstrap-daterangepicker.


## Installation

```sh
npm i vue-daterange-picker-light --save
```

or

```sh
yarn add vue-daterange-picker-light
```

import to use:

```JS
import DateRangePicker from 'vue-daterange-picker-light'
```

## Usage

Register the component
```JS
import DateRangePicker from 'vue-daterange-picker-light'
//you need to import the CSS manually (in case you want to override it)
import 'vue-daterange-picker-light/dist/vue-daterange-picker-light.css'
import { eo } from 'date-fns/locale' // import your locale

export default {
    components: { DateRangePicker },
}
```

```vue
    <date-range-picker
            ref="picker"
            :opens="opens"
            :locale-data="{ locale: eo, format: 'dd-MM-yyyy HH:mm:ss' }"
            :minDate="minDate" :maxDate="maxDate"
            :singleDatePicker="singleDatePicker"
            :timePicker="timePicker"
            :timePicker24Hour="timePicker24Hour"
            :showWeekNumbers="showWeekNumbers"
            :showDropdowns="showDropdowns"
            :autoApply="autoApply"
            v-model="dateRange"
            @update="updateValues"
            @toggle="checkOpen"
            :linkedCalendars="linkedCalendars"
            :dateFormat="dateFormat"
    >
        <template v-slot:input="picker" style="min-width: 350px;">
            {{ picker.startDate | date }} - {{ picker.endDate | date }}
        </template>
    </date-range-picker>
```

## Example / playground

<demo />

## Props

<component-props component="DateRangePicker"/>

* sample locale data (all values are optional)
```JS
import { eo } from 'date-fns/locale' // import your locale

{
    locale: eo, // setting the locale is recommended
    direction: 'ltr',
    format: 'P', // P is default long format for locales
    separator: ' - ',
    applyLabel: 'Apply',
    cancelLabel: 'Cancel',
    weekLabel: 'W',
    customRangeLabel: 'Custom Range',
    daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // will be obtained from locale if ommitted
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ], // will be obtained from locale if ommitted
    firstDay: 1 // will be obtained from locale if ommitted
}
```
* default ranges object (set to false to hide ranges)
```JS
{
    'Today': [new Date(), new Date()],
    'Yesterday': [addDays(new Date(), -1), addDays(new Date(), -1)],
    'This month': [startOfMonth(new Date()), endOfMonth(new Date())],
    'This year': [startOfYear(new Date()), endOfYear(new Date())],
    'Last week': [startOfWeek(addWeeks(new Date(), -1)), endOfWeek(addWeeks(new Date(), -1))],
    'Last month': [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))]
}
```

## Events

<component-events component="DateRangePicker"/>

## Slots

<component-slots component="DateRangePicker"/>

## Miscellaneous

If you want to control the list of years in the calendar dropdown (by default +/- 100 years from current year) you can set minDate & maxDate props. The years list will adapt.
