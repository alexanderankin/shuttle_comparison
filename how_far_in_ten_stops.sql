select 
  r.route_name,
  s.stop_name,
  st.arr_time,
  st.direction_id,
  st.trip_id,
  st_ts.arr_time
from service_table st
left join route r on r.id = st.route_id
left join stop s on s.id = st.stop_id
left join service_table st_ts on 
  st_ts.trip_id = st.trip_id and st_ts.trip_stop_sequence > st.trip_stop_sequence 
where st.id = (
  select stt.id from service_table stt where stt.stop_id = (
    select id from stop limit 1 offset 30) and arr_time > 1200 limit 1)
limit 10
