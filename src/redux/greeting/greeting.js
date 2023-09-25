const GET_GREETING = 'app/greeting/GET_GREETING';

export default function greetingReducer(state = '', action) {
  switch (action.type) {
    case GET_GREETING:
      return action.greeting;
    default:
      return state;
  }
}

export const getGreeting = () => async (dispatch) => {
  const request = await fetch('http://localhost:5000/api/greetings');
  const data = await request.json();
  dispatch({
    type: GET_GREETING,
    greeting: data,
  });
};
