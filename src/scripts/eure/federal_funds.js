const dates = [];
const values = [];

for (const observation of funds.observations) {
    dates.push(observation.date);
    values.push(parseFloat(observation.value));
}

console.log(dates);  // Array of dates: ["1954-07-01", "1954-08-01", "1954-09-01", ...]
console.log(values); // Array of values: [0.80, 1.22, 1.07, ...]



const funds =
{
    "realtime_start": "2023-05-05",
    "realtime_end": "2023-05-05",
    "observation_start": "1600-01-01",
    "observation_end": "9999-12-31",
    "units": "lin",
    "output_type": 1,
    "file_type": "json",
    "order_by": "observation_date",
    "sort_order": "asc",
    "count": 827,
    "offset": 0,
    "limit": 100000,
    "observations": [
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-07-01",
            "value": "0.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-08-01",
            "value": "1.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-09-01",
            "value": "1.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-10-01",
            "value": "0.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-11-01",
            "value": "0.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1954-12-01",
            "value": "1.28"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-01-01",
            "value": "1.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-02-01",
            "value": "1.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-03-01",
            "value": "1.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-04-01",
            "value": "1.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-05-01",
            "value": "1.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-06-01",
            "value": "1.64"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-07-01",
            "value": "1.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-08-01",
            "value": "1.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-09-01",
            "value": "2.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-10-01",
            "value": "2.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-11-01",
            "value": "2.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1955-12-01",
            "value": "2.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-01-01",
            "value": "2.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-02-01",
            "value": "2.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-03-01",
            "value": "2.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-04-01",
            "value": "2.62"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-05-01",
            "value": "2.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-06-01",
            "value": "2.71"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-07-01",
            "value": "2.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-08-01",
            "value": "2.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-09-01",
            "value": "2.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-10-01",
            "value": "2.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-11-01",
            "value": "2.88"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1956-12-01",
            "value": "2.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-01-01",
            "value": "2.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-02-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-03-01",
            "value": "2.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-04-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-05-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-06-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-07-01",
            "value": "2.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-08-01",
            "value": "3.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-09-01",
            "value": "3.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-10-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-11-01",
            "value": "3.28"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1957-12-01",
            "value": "2.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-01-01",
            "value": "2.72"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-02-01",
            "value": "1.67"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-03-01",
            "value": "1.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-04-01",
            "value": "1.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-05-01",
            "value": "0.63"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-06-01",
            "value": "0.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-07-01",
            "value": "0.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-08-01",
            "value": "1.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-09-01",
            "value": "1.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-10-01",
            "value": "1.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-11-01",
            "value": "2.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1958-12-01",
            "value": "2.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-01-01",
            "value": "2.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-02-01",
            "value": "2.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-03-01",
            "value": "2.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-04-01",
            "value": "2.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-05-01",
            "value": "2.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-06-01",
            "value": "3.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-07-01",
            "value": "3.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-08-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-09-01",
            "value": "3.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-10-01",
            "value": "3.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-11-01",
            "value": "4.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1959-12-01",
            "value": "3.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-01-01",
            "value": "3.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-02-01",
            "value": "3.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-03-01",
            "value": "3.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-04-01",
            "value": "3.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-05-01",
            "value": "3.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-06-01",
            "value": "3.32"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-07-01",
            "value": "3.23"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-08-01",
            "value": "2.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-09-01",
            "value": "2.60"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-10-01",
            "value": "2.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-11-01",
            "value": "2.44"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1960-12-01",
            "value": "1.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-01-01",
            "value": "1.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-02-01",
            "value": "2.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-03-01",
            "value": "2.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-04-01",
            "value": "1.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-05-01",
            "value": "1.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-06-01",
            "value": "1.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-07-01",
            "value": "1.17"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-08-01",
            "value": "2.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-09-01",
            "value": "1.88"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-10-01",
            "value": "2.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-11-01",
            "value": "2.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1961-12-01",
            "value": "2.33"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-01-01",
            "value": "2.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-02-01",
            "value": "2.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-03-01",
            "value": "2.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-04-01",
            "value": "2.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-05-01",
            "value": "2.36"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-06-01",
            "value": "2.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-07-01",
            "value": "2.71"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-08-01",
            "value": "2.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-09-01",
            "value": "2.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-10-01",
            "value": "2.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-11-01",
            "value": "2.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1962-12-01",
            "value": "2.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-01-01",
            "value": "2.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-02-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-03-01",
            "value": "2.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-04-01",
            "value": "2.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-05-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-06-01",
            "value": "2.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-07-01",
            "value": "3.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-08-01",
            "value": "3.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-09-01",
            "value": "3.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-10-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-11-01",
            "value": "3.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1963-12-01",
            "value": "3.38"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-01-01",
            "value": "3.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-02-01",
            "value": "3.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-03-01",
            "value": "3.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-04-01",
            "value": "3.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-05-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-06-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-07-01",
            "value": "3.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-08-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-09-01",
            "value": "3.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-10-01",
            "value": "3.36"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-11-01",
            "value": "3.52"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1964-12-01",
            "value": "3.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-01-01",
            "value": "3.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-02-01",
            "value": "3.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-03-01",
            "value": "4.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-04-01",
            "value": "4.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-05-01",
            "value": "4.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-06-01",
            "value": "4.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-07-01",
            "value": "4.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-08-01",
            "value": "4.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-09-01",
            "value": "4.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-10-01",
            "value": "4.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-11-01",
            "value": "4.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1965-12-01",
            "value": "4.32"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-01-01",
            "value": "4.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-02-01",
            "value": "4.60"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-03-01",
            "value": "4.66"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-04-01",
            "value": "4.67"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-05-01",
            "value": "4.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-06-01",
            "value": "5.17"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-07-01",
            "value": "5.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-08-01",
            "value": "5.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-09-01",
            "value": "5.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-10-01",
            "value": "5.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-11-01",
            "value": "5.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1966-12-01",
            "value": "5.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-01-01",
            "value": "4.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-02-01",
            "value": "5.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-03-01",
            "value": "4.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-04-01",
            "value": "4.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-05-01",
            "value": "3.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-06-01",
            "value": "3.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-07-01",
            "value": "3.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-08-01",
            "value": "3.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-09-01",
            "value": "3.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-10-01",
            "value": "3.88"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-11-01",
            "value": "4.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1967-12-01",
            "value": "4.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-01-01",
            "value": "4.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-02-01",
            "value": "4.71"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-03-01",
            "value": "5.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-04-01",
            "value": "5.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-05-01",
            "value": "6.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-06-01",
            "value": "6.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-07-01",
            "value": "6.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-08-01",
            "value": "6.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-09-01",
            "value": "5.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-10-01",
            "value": "5.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-11-01",
            "value": "5.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1968-12-01",
            "value": "6.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-01-01",
            "value": "6.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-02-01",
            "value": "6.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-03-01",
            "value": "6.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-04-01",
            "value": "7.41"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-05-01",
            "value": "8.67"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-06-01",
            "value": "8.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-07-01",
            "value": "8.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-08-01",
            "value": "9.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-09-01",
            "value": "9.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-10-01",
            "value": "9.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-11-01",
            "value": "8.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1969-12-01",
            "value": "8.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-01-01",
            "value": "8.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-02-01",
            "value": "8.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-03-01",
            "value": "7.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-04-01",
            "value": "8.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-05-01",
            "value": "7.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-06-01",
            "value": "7.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-07-01",
            "value": "7.21"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-08-01",
            "value": "6.62"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-09-01",
            "value": "6.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-10-01",
            "value": "6.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-11-01",
            "value": "5.60"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1970-12-01",
            "value": "4.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-01-01",
            "value": "4.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-02-01",
            "value": "3.72"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-03-01",
            "value": "3.71"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-04-01",
            "value": "4.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-05-01",
            "value": "4.63"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-06-01",
            "value": "4.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-07-01",
            "value": "5.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-08-01",
            "value": "5.57"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-09-01",
            "value": "5.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-10-01",
            "value": "5.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-11-01",
            "value": "4.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1971-12-01",
            "value": "4.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-01-01",
            "value": "3.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-02-01",
            "value": "3.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-03-01",
            "value": "3.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-04-01",
            "value": "4.17"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-05-01",
            "value": "4.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-06-01",
            "value": "4.46"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-07-01",
            "value": "4.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-08-01",
            "value": "4.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-09-01",
            "value": "4.87"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-10-01",
            "value": "5.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-11-01",
            "value": "5.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1972-12-01",
            "value": "5.33"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-01-01",
            "value": "5.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-02-01",
            "value": "6.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-03-01",
            "value": "7.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-04-01",
            "value": "7.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-05-01",
            "value": "7.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-06-01",
            "value": "8.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-07-01",
            "value": "10.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-08-01",
            "value": "10.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-09-01",
            "value": "10.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-10-01",
            "value": "10.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-11-01",
            "value": "10.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1973-12-01",
            "value": "9.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-01-01",
            "value": "9.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-02-01",
            "value": "8.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-03-01",
            "value": "9.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-04-01",
            "value": "10.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-05-01",
            "value": "11.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-06-01",
            "value": "11.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-07-01",
            "value": "12.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-08-01",
            "value": "12.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-09-01",
            "value": "11.34"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-10-01",
            "value": "10.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-11-01",
            "value": "9.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1974-12-01",
            "value": "8.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-01-01",
            "value": "7.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-02-01",
            "value": "6.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-03-01",
            "value": "5.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-04-01",
            "value": "5.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-05-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-06-01",
            "value": "5.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-07-01",
            "value": "6.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-08-01",
            "value": "6.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-09-01",
            "value": "6.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-10-01",
            "value": "5.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-11-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1975-12-01",
            "value": "5.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-01-01",
            "value": "4.87"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-02-01",
            "value": "4.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-03-01",
            "value": "4.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-04-01",
            "value": "4.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-05-01",
            "value": "5.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-06-01",
            "value": "5.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-07-01",
            "value": "5.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-08-01",
            "value": "5.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-09-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-10-01",
            "value": "5.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-11-01",
            "value": "4.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1976-12-01",
            "value": "4.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-01-01",
            "value": "4.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-02-01",
            "value": "4.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-03-01",
            "value": "4.69"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-04-01",
            "value": "4.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-05-01",
            "value": "5.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-06-01",
            "value": "5.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-07-01",
            "value": "5.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-08-01",
            "value": "5.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-09-01",
            "value": "6.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-10-01",
            "value": "6.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-11-01",
            "value": "6.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1977-12-01",
            "value": "6.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-01-01",
            "value": "6.70"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-02-01",
            "value": "6.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-03-01",
            "value": "6.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-04-01",
            "value": "6.89"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-05-01",
            "value": "7.36"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-06-01",
            "value": "7.60"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-07-01",
            "value": "7.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-08-01",
            "value": "8.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-09-01",
            "value": "8.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-10-01",
            "value": "8.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-11-01",
            "value": "9.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1978-12-01",
            "value": "10.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-01-01",
            "value": "10.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-02-01",
            "value": "10.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-03-01",
            "value": "10.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-04-01",
            "value": "10.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-05-01",
            "value": "10.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-06-01",
            "value": "10.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-07-01",
            "value": "10.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-08-01",
            "value": "10.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-09-01",
            "value": "11.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-10-01",
            "value": "13.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-11-01",
            "value": "13.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1979-12-01",
            "value": "13.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-01-01",
            "value": "13.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-02-01",
            "value": "14.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-03-01",
            "value": "17.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-04-01",
            "value": "17.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-05-01",
            "value": "10.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-06-01",
            "value": "9.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-07-01",
            "value": "9.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-08-01",
            "value": "9.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-09-01",
            "value": "10.87"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-10-01",
            "value": "12.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-11-01",
            "value": "15.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1980-12-01",
            "value": "18.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-01-01",
            "value": "19.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-02-01",
            "value": "15.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-03-01",
            "value": "14.70"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-04-01",
            "value": "15.72"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-05-01",
            "value": "18.52"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-06-01",
            "value": "19.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-07-01",
            "value": "19.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-08-01",
            "value": "17.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-09-01",
            "value": "15.87"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-10-01",
            "value": "15.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-11-01",
            "value": "13.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1981-12-01",
            "value": "12.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-01-01",
            "value": "13.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-02-01",
            "value": "14.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-03-01",
            "value": "14.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-04-01",
            "value": "14.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-05-01",
            "value": "14.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-06-01",
            "value": "14.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-07-01",
            "value": "12.59"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-08-01",
            "value": "10.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-09-01",
            "value": "10.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-10-01",
            "value": "9.71"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-11-01",
            "value": "9.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1982-12-01",
            "value": "8.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-01-01",
            "value": "8.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-02-01",
            "value": "8.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-03-01",
            "value": "8.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-04-01",
            "value": "8.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-05-01",
            "value": "8.63"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-06-01",
            "value": "8.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-07-01",
            "value": "9.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-08-01",
            "value": "9.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-09-01",
            "value": "9.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-10-01",
            "value": "9.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-11-01",
            "value": "9.34"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1983-12-01",
            "value": "9.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-01-01",
            "value": "9.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-02-01",
            "value": "9.59"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-03-01",
            "value": "9.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-04-01",
            "value": "10.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-05-01",
            "value": "10.32"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-06-01",
            "value": "11.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-07-01",
            "value": "11.23"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-08-01",
            "value": "11.64"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-09-01",
            "value": "11.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-10-01",
            "value": "9.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-11-01",
            "value": "9.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1984-12-01",
            "value": "8.38"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-01-01",
            "value": "8.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-02-01",
            "value": "8.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-03-01",
            "value": "8.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-04-01",
            "value": "8.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-05-01",
            "value": "7.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-06-01",
            "value": "7.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-07-01",
            "value": "7.88"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-08-01",
            "value": "7.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-09-01",
            "value": "7.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-10-01",
            "value": "7.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-11-01",
            "value": "8.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1985-12-01",
            "value": "8.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-01-01",
            "value": "8.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-02-01",
            "value": "7.86"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-03-01",
            "value": "7.48"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-04-01",
            "value": "6.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-05-01",
            "value": "6.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-06-01",
            "value": "6.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-07-01",
            "value": "6.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-08-01",
            "value": "6.17"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-09-01",
            "value": "5.89"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-10-01",
            "value": "5.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-11-01",
            "value": "6.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1986-12-01",
            "value": "6.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-01-01",
            "value": "6.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-02-01",
            "value": "6.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-03-01",
            "value": "6.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-04-01",
            "value": "6.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-05-01",
            "value": "6.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-06-01",
            "value": "6.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-07-01",
            "value": "6.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-08-01",
            "value": "6.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-09-01",
            "value": "7.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-10-01",
            "value": "7.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-11-01",
            "value": "6.69"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1987-12-01",
            "value": "6.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-01-01",
            "value": "6.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-02-01",
            "value": "6.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-03-01",
            "value": "6.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-04-01",
            "value": "6.87"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-05-01",
            "value": "7.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-06-01",
            "value": "7.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-07-01",
            "value": "7.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-08-01",
            "value": "8.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-09-01",
            "value": "8.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-10-01",
            "value": "8.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-11-01",
            "value": "8.35"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1988-12-01",
            "value": "8.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-01-01",
            "value": "9.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-02-01",
            "value": "9.36"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-03-01",
            "value": "9.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-04-01",
            "value": "9.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-05-01",
            "value": "9.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-06-01",
            "value": "9.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-07-01",
            "value": "9.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-08-01",
            "value": "8.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-09-01",
            "value": "9.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-10-01",
            "value": "8.84"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-11-01",
            "value": "8.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1989-12-01",
            "value": "8.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-01-01",
            "value": "8.23"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-02-01",
            "value": "8.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-03-01",
            "value": "8.28"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-04-01",
            "value": "8.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-05-01",
            "value": "8.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-06-01",
            "value": "8.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-07-01",
            "value": "8.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-08-01",
            "value": "8.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-09-01",
            "value": "8.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-10-01",
            "value": "8.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-11-01",
            "value": "7.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1990-12-01",
            "value": "7.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-01-01",
            "value": "6.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-02-01",
            "value": "6.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-03-01",
            "value": "6.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-04-01",
            "value": "5.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-05-01",
            "value": "5.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-06-01",
            "value": "5.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-07-01",
            "value": "5.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-08-01",
            "value": "5.66"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-09-01",
            "value": "5.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-10-01",
            "value": "5.21"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-11-01",
            "value": "4.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1991-12-01",
            "value": "4.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-01-01",
            "value": "4.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-02-01",
            "value": "4.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-03-01",
            "value": "3.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-04-01",
            "value": "3.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-05-01",
            "value": "3.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-06-01",
            "value": "3.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-07-01",
            "value": "3.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-08-01",
            "value": "3.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-09-01",
            "value": "3.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-10-01",
            "value": "3.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-11-01",
            "value": "3.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1992-12-01",
            "value": "2.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-01-01",
            "value": "3.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-02-01",
            "value": "3.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-03-01",
            "value": "3.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-04-01",
            "value": "2.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-05-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-06-01",
            "value": "3.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-07-01",
            "value": "3.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-08-01",
            "value": "3.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-09-01",
            "value": "3.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-10-01",
            "value": "2.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-11-01",
            "value": "3.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1993-12-01",
            "value": "2.96"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-01-01",
            "value": "3.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-02-01",
            "value": "3.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-03-01",
            "value": "3.34"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-04-01",
            "value": "3.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-05-01",
            "value": "4.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-06-01",
            "value": "4.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-07-01",
            "value": "4.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-08-01",
            "value": "4.47"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-09-01",
            "value": "4.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-10-01",
            "value": "4.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-11-01",
            "value": "5.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1994-12-01",
            "value": "5.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-01-01",
            "value": "5.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-02-01",
            "value": "5.92"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-03-01",
            "value": "5.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-04-01",
            "value": "6.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-05-01",
            "value": "6.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-06-01",
            "value": "6.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-07-01",
            "value": "5.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-08-01",
            "value": "5.74"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-09-01",
            "value": "5.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-10-01",
            "value": "5.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-11-01",
            "value": "5.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1995-12-01",
            "value": "5.60"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-01-01",
            "value": "5.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-02-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-03-01",
            "value": "5.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-04-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-05-01",
            "value": "5.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-06-01",
            "value": "5.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-07-01",
            "value": "5.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-08-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-09-01",
            "value": "5.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-10-01",
            "value": "5.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-11-01",
            "value": "5.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1996-12-01",
            "value": "5.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-01-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-02-01",
            "value": "5.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-03-01",
            "value": "5.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-04-01",
            "value": "5.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-05-01",
            "value": "5.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-06-01",
            "value": "5.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-07-01",
            "value": "5.52"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-08-01",
            "value": "5.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-09-01",
            "value": "5.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-10-01",
            "value": "5.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-11-01",
            "value": "5.52"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1997-12-01",
            "value": "5.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-01-01",
            "value": "5.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-02-01",
            "value": "5.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-03-01",
            "value": "5.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-04-01",
            "value": "5.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-05-01",
            "value": "5.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-06-01",
            "value": "5.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-07-01",
            "value": "5.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-08-01",
            "value": "5.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-09-01",
            "value": "5.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-10-01",
            "value": "5.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-11-01",
            "value": "4.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1998-12-01",
            "value": "4.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-01-01",
            "value": "4.63"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-02-01",
            "value": "4.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-03-01",
            "value": "4.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-04-01",
            "value": "4.74"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-05-01",
            "value": "4.74"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-06-01",
            "value": "4.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-07-01",
            "value": "4.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-08-01",
            "value": "5.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-09-01",
            "value": "5.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-10-01",
            "value": "5.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-11-01",
            "value": "5.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "1999-12-01",
            "value": "5.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-01-01",
            "value": "5.45"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-02-01",
            "value": "5.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-03-01",
            "value": "5.85"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-04-01",
            "value": "6.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-05-01",
            "value": "6.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-06-01",
            "value": "6.53"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-07-01",
            "value": "6.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-08-01",
            "value": "6.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-09-01",
            "value": "6.52"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-10-01",
            "value": "6.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-11-01",
            "value": "6.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2000-12-01",
            "value": "6.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-01-01",
            "value": "5.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-02-01",
            "value": "5.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-03-01",
            "value": "5.31"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-04-01",
            "value": "4.80"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-05-01",
            "value": "4.21"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-06-01",
            "value": "3.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-07-01",
            "value": "3.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-08-01",
            "value": "3.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-09-01",
            "value": "3.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-10-01",
            "value": "2.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-11-01",
            "value": "2.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2001-12-01",
            "value": "1.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-01-01",
            "value": "1.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-02-01",
            "value": "1.74"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-03-01",
            "value": "1.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-04-01",
            "value": "1.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-05-01",
            "value": "1.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-06-01",
            "value": "1.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-07-01",
            "value": "1.73"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-08-01",
            "value": "1.74"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-09-01",
            "value": "1.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-10-01",
            "value": "1.75"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-11-01",
            "value": "1.34"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2002-12-01",
            "value": "1.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-01-01",
            "value": "1.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-02-01",
            "value": "1.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-03-01",
            "value": "1.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-04-01",
            "value": "1.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-05-01",
            "value": "1.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-06-01",
            "value": "1.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-07-01",
            "value": "1.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-08-01",
            "value": "1.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-09-01",
            "value": "1.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-10-01",
            "value": "1.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-11-01",
            "value": "1.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2003-12-01",
            "value": "0.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-01-01",
            "value": "1.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-02-01",
            "value": "1.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-03-01",
            "value": "1.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-04-01",
            "value": "1.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-05-01",
            "value": "1.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-06-01",
            "value": "1.03"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-07-01",
            "value": "1.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-08-01",
            "value": "1.43"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-09-01",
            "value": "1.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-10-01",
            "value": "1.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-11-01",
            "value": "1.93"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2004-12-01",
            "value": "2.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-01-01",
            "value": "2.28"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-02-01",
            "value": "2.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-03-01",
            "value": "2.63"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-04-01",
            "value": "2.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-05-01",
            "value": "3.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-06-01",
            "value": "3.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-07-01",
            "value": "3.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-08-01",
            "value": "3.50"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-09-01",
            "value": "3.62"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-10-01",
            "value": "3.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-11-01",
            "value": "4.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2005-12-01",
            "value": "4.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-01-01",
            "value": "4.29"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-02-01",
            "value": "4.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-03-01",
            "value": "4.59"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-04-01",
            "value": "4.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-05-01",
            "value": "4.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-06-01",
            "value": "4.99"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-07-01",
            "value": "5.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-08-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-09-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-10-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-11-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2006-12-01",
            "value": "5.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-01-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-02-01",
            "value": "5.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-03-01",
            "value": "5.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-04-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-05-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-06-01",
            "value": "5.25"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-07-01",
            "value": "5.26"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-08-01",
            "value": "5.02"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-09-01",
            "value": "4.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-10-01",
            "value": "4.76"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-11-01",
            "value": "4.49"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2007-12-01",
            "value": "4.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-01-01",
            "value": "3.94"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-02-01",
            "value": "2.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-03-01",
            "value": "2.61"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-04-01",
            "value": "2.28"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-05-01",
            "value": "1.98"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-06-01",
            "value": "2.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-07-01",
            "value": "2.01"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-08-01",
            "value": "2.00"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-09-01",
            "value": "1.81"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-10-01",
            "value": "0.97"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-11-01",
            "value": "0.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2008-12-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-01-01",
            "value": "0.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-02-01",
            "value": "0.22"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-03-01",
            "value": "0.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-04-01",
            "value": "0.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-05-01",
            "value": "0.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-06-01",
            "value": "0.21"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-07-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-08-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-09-01",
            "value": "0.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-10-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-11-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2009-12-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-01-01",
            "value": "0.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-02-01",
            "value": "0.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-03-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-04-01",
            "value": "0.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-05-01",
            "value": "0.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-06-01",
            "value": "0.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-07-01",
            "value": "0.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-08-01",
            "value": "0.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-09-01",
            "value": "0.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-10-01",
            "value": "0.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-11-01",
            "value": "0.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2010-12-01",
            "value": "0.18"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-01-01",
            "value": "0.17"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-02-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-03-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-04-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-05-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-06-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-07-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-08-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-09-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-10-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-11-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2011-12-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-01-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-02-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-03-01",
            "value": "0.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-04-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-05-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-06-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-07-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-08-01",
            "value": "0.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-09-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-10-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-11-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2012-12-01",
            "value": "0.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-01-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-02-01",
            "value": "0.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-03-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-04-01",
            "value": "0.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-05-01",
            "value": "0.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-06-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-07-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-08-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-09-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-10-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-11-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2013-12-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-01-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-02-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-03-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-04-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-05-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-06-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-07-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-08-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-09-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-10-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-11-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2014-12-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-01-01",
            "value": "0.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-02-01",
            "value": "0.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-03-01",
            "value": "0.11"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-04-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-05-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-06-01",
            "value": "0.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-07-01",
            "value": "0.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-08-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-09-01",
            "value": "0.14"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-10-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-11-01",
            "value": "0.12"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2015-12-01",
            "value": "0.24"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-01-01",
            "value": "0.34"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-02-01",
            "value": "0.38"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-03-01",
            "value": "0.36"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-04-01",
            "value": "0.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-05-01",
            "value": "0.37"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-06-01",
            "value": "0.38"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-07-01",
            "value": "0.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-08-01",
            "value": "0.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-09-01",
            "value": "0.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-10-01",
            "value": "0.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-11-01",
            "value": "0.41"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2016-12-01",
            "value": "0.54"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-01-01",
            "value": "0.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-02-01",
            "value": "0.66"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-03-01",
            "value": "0.79"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-04-01",
            "value": "0.90"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-05-01",
            "value": "0.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-06-01",
            "value": "1.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-07-01",
            "value": "1.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-08-01",
            "value": "1.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-09-01",
            "value": "1.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-10-01",
            "value": "1.15"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-11-01",
            "value": "1.16"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2017-12-01",
            "value": "1.30"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-01-01",
            "value": "1.41"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-02-01",
            "value": "1.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-03-01",
            "value": "1.51"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-04-01",
            "value": "1.69"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-05-01",
            "value": "1.70"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-06-01",
            "value": "1.82"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-07-01",
            "value": "1.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-08-01",
            "value": "1.91"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-09-01",
            "value": "1.95"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-10-01",
            "value": "2.19"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-11-01",
            "value": "2.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2018-12-01",
            "value": "2.27"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-01-01",
            "value": "2.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-02-01",
            "value": "2.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-03-01",
            "value": "2.41"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-04-01",
            "value": "2.42"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-05-01",
            "value": "2.39"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-06-01",
            "value": "2.38"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-07-01",
            "value": "2.40"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-08-01",
            "value": "2.13"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-09-01",
            "value": "2.04"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-10-01",
            "value": "1.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-11-01",
            "value": "1.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2019-12-01",
            "value": "1.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-01-01",
            "value": "1.55"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-02-01",
            "value": "1.58"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-03-01",
            "value": "0.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-04-01",
            "value": "0.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-05-01",
            "value": "0.05"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-06-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-07-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-08-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-09-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-10-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-11-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2020-12-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-01-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-02-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-03-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-04-01",
            "value": "0.07"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-05-01",
            "value": "0.06"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-06-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-07-01",
            "value": "0.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-08-01",
            "value": "0.09"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-09-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-10-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-11-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2021-12-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-01-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-02-01",
            "value": "0.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-03-01",
            "value": "0.20"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-04-01",
            "value": "0.33"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-05-01",
            "value": "0.77"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-06-01",
            "value": "1.21"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-07-01",
            "value": "1.68"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-08-01",
            "value": "2.33"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-09-01",
            "value": "2.56"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-10-01",
            "value": "3.08"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-11-01",
            "value": "3.78"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2022-12-01",
            "value": "4.10"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2023-01-01",
            "value": "4.33"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2023-02-01",
            "value": "4.57"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2023-03-01",
            "value": "4.65"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2023-04-01",
            "value": "4.83"
        },
        {
            "realtime_start": "2023-05-05",
            "realtime_end": "2023-05-05",
            "date": "2023-05-01",
            "value": "."
        }
    ]
}

// https://api.stlouisfed.org/fred/series/observations?series_id=DFF&api_key=8033f2da8ce64ec092c6feb6cbef9b01&file_type=json&frequency=m
