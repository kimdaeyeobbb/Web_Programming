export interface ApiResponse<Data> {
  data: Data;  // 응답 값에 따라 달라지는 data를 제네릭 Data로 선언
  statusCode: string;  // 응답 코드
  statusMessage: string;
}

export const fetchPriceInfo = (): Promise<ApiResponse<PriceInfo>> => {
  const priceUrl = 'https://api.example.com/price'; // url
  return request ({
    method: 'GET',
    url: priceUrl
  })
}

export cont fetchOrderInfo = (): Promise<ApiResponse<OrderInfo>> => {
  const orderUrl = 'https://api.example.com/order';
  return request ({
    method: 'GET',
    url: orderUrl
  })
}