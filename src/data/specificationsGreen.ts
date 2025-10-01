export interface VinFastGreenModel {
  id: string;
  model: string;
  type: string;
  specs: { [key: string]: string };
  vfNameInComp: string;
  competitors: string[];
  comparisons: Comparison[];
  content: {
    ct1: string;
    ct11: string;
    ct12: string;
    ct13: string;
    ct14: string;
    ct15: string;
    ct16: string;
    ct2: string;
    ct21: string;
    ct22: string;
    ct23: string;
    ct24: string;
    ct25: string;
    ct26: string;
    ct3: string;
    ct31: string;
    ct32: string;
    ct33: string;
    ct34: string;
    ct35: string;
    ct36: string;
    ct4: string;
    ct41: string;
    ct42: string;
    ct43: string;
    ct44: string;
    ct45: string;
    ct46: string;
    ct5: string;
    ct51: string;
    ct52: string;
    ct53: string;
    ct54: string;
    ct55: string;
    ct56: string;
    ct6: string;
    ct61: string;
    ct62: string;
    ct63: string;
    ct64: string;
    ct65: string;
    ct66: string;
  }
}

export interface Comparison {
  parameter: string;
  values: string[]; // [VF value, competitor1 value, competitor2 value]
}

export const vinFastGreenData: VinFastGreenModel[] = [
  {
    id: 'minio-green',
    model: 'Minio Green',
    type: "green",
    specs: {
      'Động cơ': '01 Motor, 20 kW / 27 PS',
      'Mô-men xoắn': '65 Nm',
      'Tăng tốc': '6.5s (0-50km/h)',
      'Quãng đường': '170 km (theo NEDC)',
      'Thời gian sạc nhanh': '30 phút (10%-70% AC 12kW)',
      'Dẫn động': 'RWD (Dẫn động cầu sau)',
      'Dung lượng pin': '14.7 kWh',
      'Kích thước': '3.090 x 1.496 x 1.625 mm',
      'Khoảng sáng gầm': '150 mm',
      'Dung tích cốp / Số ghế': '200 lít / 4 ghế',
    },
    vfNameInComp: 'VinFast Minio Green',
    competitors: ['MG Comet EV', 'Tata Tiago EV'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '215 triệu VNĐ (kèm pin; tương đương ~INR 8.99 lakh, ưu đãi thương mại đến 30/9/2025)',
          '190-265 triệu VNĐ (7-9.8 lakh INR, bản cao cấp ~265 triệu)',
          '215-300 triệu VNĐ (8-11 lakh INR, tùy pin 19.2/24 kWh)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '170 km (NEDC, thực tế ~120-140 km)',
          '230 km (ARAI, thực tế ~180-200 km)',
          '250-315 km (ARAI, tùy pin; thực tế ~200-280 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '27 PS (20 kW), 65 Nm',
          '41 PS (30 kW), 110 Nm',
          '61 PS (45 kW), 110 Nm (tùy bản)',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '30 phút (10-70% AC 12kW); 4-5 giờ AC đầy',
          '45 phút (10-100% AC, không DC nhanh); ~7 giờ đầy',
          '50-58 phút (10-90% DC); 3.6-8.8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '4 sao (dự kiến ASEAN NCAP; 1 túi khí, ABS, kiểm soát lực kéo, camera lùi)',
          '4 sao (Global NCAP, có ABS, EBD, 2 túi khí; yếu ở bảo vệ trẻ em)',
          '4 sao (Global NCAP, cao nhất phân khúc; có ABS, EBD, 2 túi khí, kiểm soát ổn định)',
        ],
      },
    ],
    content: {
      ct1: '<h1>VinFast Minio Green - Xe nhỏ gọn, di chuyển đô thị thông minh.</h1><p>Thiết kế nhỏ gọn, linh hoạt dành cho đô thị đông đúc, Minio Green là lựa chọn thay thế xe máy lý tưởng, mang đến trải nghiệm di chuyển xanh, tiết kiệm và an toàn.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
      ct2: '<h1>Minio Green - Tự do di chuyển, phong cách riêng.</h1><p>Với dải màu trẻ trung và thiết kế hiện đại, Minio Green giúp bạn thể hiện cá tính trong từng chuyến đi ngắn hàng ngày, phù hợp cho cá nhân và dịch vụ giao hàng.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
      ct3: '<h1>La-zăng thể thao, vận hành linh hoạt.</h1><p>La-zăng 13 inch kết hợp lốp lớn hơn, mang lại sự ổn định và dễ dàng di chuyển trên đường đô thị gồ ghề, tăng thêm sự cá tính cho chiếc xe nhỏ.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: '<h1>Minio Green - Biểu tượng di chuyển xanh đô thị.</h1><p>Không chỉ là phương tiện, Minio Green là giải pháp cách mạng cho giao thông đô thị, với chi phí vận hành thấp và tính năng thông minh hỗ trợ kinh doanh.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: '<h1>Minio Green - Công nghệ nhỏ gọn, giá trị lớn.</h1><p>Kết hợp công nghệ sạc nhanh và hệ thống tự chẩn đoán, Minio Green mang đến sự tiện lợi và sáng tạo trong thiết kế dành cho người dùng đô thị.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: '<h1>Minio Green - Không gian đủ dùng cho mọi hành trình ngắn.</h1><p>Nội thất tối ưu cho 4 người, với ghế điều chỉnh 4 hướng và vật liệu thân thiện, tạo không gian thoải mái cho các chuyến đi hàng ngày.</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'herio-green',
    model: 'Herio Green',
    type: "green",
    specs: {
      'Động cơ': '01 Motor, 70 kW / 94 PS',
      'Mô-men xoắn': '150 Nm',
      'Tăng tốc': '8.5s (0-100km/h)',
      'Quãng đường': '300 km (theo NEDC)',
      'Thời gian sạc nhanh': '28 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '37.23 kWh',
      'Kích thước': '3.967 x 1.723 x 1.578 mm',
      'Khoảng sáng gầm': '168 mm',
      'Dung tích cốp / Số ghế': '300 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast Herio Green',
    competitors: ['BYD Dolphin', 'ORA Good Cat'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '458 triệu VNĐ (sau ưu đãi 4%, kèm pin; tối ưu cho dịch vụ)',
          '659 triệu VNĐ (niêm yết, không ưu đãi lớn)',
          '538-588 triệu VNĐ (niêm yết, tùy pin LFP/Ternary)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '300 km (NEDC, thực tế ~240 km)',
          '405 km (NEDC, thực tế ~320 km)',
          '420 km (NEDC, thực tế ~340 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '94 mã lực (70 kW), 150 Nm',
          '94 mã lực (70 kW), 180 Nm',
          '171 mã lực (126 kW), 250 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '28 phút (10-70% DC); 6 giờ AC đầy',
          '30 phút (30-80% DC); 6.5 giờ AC đầy',
          '45 phút (0-80% DC); 8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '4 sao (ASEAN NCAP; 6 túi khí, ABS, EBD, ESC, ADAS cơ bản)',
          '5 sao (Euro NCAP; 7 túi khí, ABS, ESC, hỗ trợ tránh va chạm)',
          '5 sao (C-NCAP; 6 túi khí, ABS, EBD, kiểm soát ổn định)',
        ],
      },
    ],
    content: {
      ct1: '<h1>VinFast Herio Green - Crossover đô thị xanh, hiệu quả kinh doanh.</h1><p>Herio Green, phiên bản tối ưu từ VF5, mang đến không gian rộng rãi và chi phí thấp cho dịch vụ vận tải, kết hợp công nghệ xanh hiện đại.</p>',
      ct11: '<h3>Herio Green – Màu Xanh Lá</h3><h4 class="uppercase">Năng lượng xanh cho đô thị</h4><p>Màu xanh lá tượng trưng cho sự thân thiện môi trường, giúp Herio Green trở thành lựa chọn lý tưởng cho các doanh nghiệp vận tải hướng tới bền vững.</p>',
      ct12: '<h3>Herio Green – Màu Xám</h3><h4 class="uppercase">Chuyên nghiệp và mạnh mẽ</h4><p>Sắc xám mang đến vẻ ngoài chuyên nghiệp, phù hợp với hình ảnh doanh nghiệp dịch vụ, kết hợp hiệu suất ổn định trên mọi cung đường.</p>',
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
      ct2: '<h1>Herio Green - Đa dạng màu sắc cho doanh nghiệp.</h1><p>Dải màu cơ bản và nâng cao giúp tùy chỉnh theo thương hiệu, tăng nhận diện cho dịch vụ vận tải và giao hàng.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
      ct3: '<h1>La-zăng bền bỉ cho địa hình đô thị.</h1><p>La-zăng kích thước chuẩn, tăng khả năng bám đường và độ bền cho các chuyến đi dài ngày trong dịch vụ.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: '<h1>Herio Green - Giải pháp vận tải thông minh.</h1><p>Với thiết kế crossover linh hoạt, Herio Green tối ưu chi phí vận hành, phù hợp cho taxi và ride-sharing.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: '<h1>Herio Green - Công nghệ hỗ trợ kinh doanh.</h1><p>Tích hợp hệ thống chẩn đoán và kết nối, giúp quản lý đội xe dễ dàng hơn cho doanh nghiệp.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: '<h1>Herio Green - Không gian thoải mái cho 5 người.</h1><p>Nội thất rộng rãi, ghế thoải mái, lý tưởng cho hành khách dịch vụ và gia đình nhỏ.</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'nerio-green',
    model: 'Nerio Green',
    type: "green",
    specs: {
      'Động cơ': '01 Motor, 110 kW / 147 PS',
      'Mô-men xoắn': '242 Nm',
      'Tăng tốc': '9.0s (0-100km/h)',
      'Quãng đường': '285 km (theo NEDC)',
      'Thời gian sạc nhanh': '18 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '42 kWh',
      'Kích thước': '4.300 x 1.768 x 1.613 mm',
      'Khoảng sáng gầm': '170 mm',
      'Dung tích cốp / Số ghế': '400 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast Nerio Green',
    competitors: ['BYD Atto 3', 'Hyundai Kona Electric'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '550 triệu VNĐ (sau ưu đãi, kèm pin; tối ưu cho taxi)',
          '766-886 triệu VNĐ (Dynamic 766 triệu, Premium 886 triệu)',
          '850-950 triệu VNĐ (bản Standard ~850 triệu; nhập khẩu)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '285 km (NEDC, thực tế ~220-250 km)',
          '410-480 km (NEDC, thực tế ~350-420 km)',
          '420 km (EPA, thực tế ~350 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '147 mã lực (110 kW), 242 Nm',
          '204 mã lực (150 kW), 310 Nm',
          '201 mã lực (150 kW), 255 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '18 phút (10-70% DC); 7 giờ AC đầy',
          '30 phút (10-80% DC); 7-9 giờ AC đầy',
          '43 phút (10-80% DC); 5-6 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (ASEAN NCAP dự kiến; 6 túi khí, ABS, EBD, ESC, ADAS Level 2)',
          '5 sao (Euro NCAP; 7 túi khí, hỗ trợ tránh va chạm)',
          '5 sao (Euro NCAP; 6 túi khí, ADAS nâng cao)',
        ],
      },
    ],
    content: {
      ct1: '<h1>VinFast Nerio Green - SUV nhỏ gọn cho dịch vụ vận tải.</h1><p>Phiên bản thương mại từ VF e34, Nerio Green mang hiệu suất mạnh mẽ và chi phí thấp, lý tưởng cho taxi và ride-hailing.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
      ct2: '<h1>Nerio Green - Màu sắc chuyên nghiệp cho đội xe.</h1><p>8 lựa chọn màu từ xanh dương đến đen, giúp tùy chỉnh theo thương hiệu doanh nghiệp vận tải.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
      ct3: '<h1>Vận hành mạnh mẽ, leo dốc dễ dàng.</h1><p>Mô-men xoắn cao giúp tăng tốc nhanh, phù hợp địa hình đô thị và ngoại ô cho dịch vụ.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: '<h1>Nerio Green - An toàn và hiệu quả cho kinh doanh.</h1><p>Hệ thống an toàn toàn diện với 6 túi khí và ADAS, đảm bảo an tâm cho tài xế và hành khách.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: '<h1>Nerio Green - Công nghệ hỗ trợ đội xe.</h1><p>Tích hợp kết nối thông minh, theo dõi vị trí và chẩn đoán từ xa cho quản lý hiệu quả.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: '<h1>Nerio Green - Không gian rộng cho 5 hành khách.</h1><p>Thiết kế nội thất thoải mái, cốp rộng, phù hợp cho dịch vụ chở khách và hàng hóa nhỏ.</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'limo-green',
    model: 'Limo Green',
    type: "green",
    specs: {
      'Động cơ': '01 Motor, 150 kW / 204 PS',
      'Mô-men xoắn': '280 Nm',
      'Tăng tốc': '9.5s (0-100km/h)',
      'Quãng đường': '470 km (theo NEDC)',
      'Thời gian sạc nhanh': '30 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '60.13 kWh',
      'Kích thước': '4.730 x 1.870 x 1.690 mm',
      'Khoảng sáng gầm': '170 mm',
      'Dung tích cốp / Số ghế': '500 lít / 7 ghế',
    },
    vfNameInComp: 'VinFast Limo Green',
    competitors: ['Mitsubishi Xpander', 'Toyota Veloz Cross'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '749 triệu VNĐ (kèm pin, ưu đãi đến 30/9/2025; lăn bánh ~800 triệu)',
          '560-658 triệu VNĐ (xăng, không ưu đãi lớn)',
          '638-660 triệu VNĐ (xăng, tùy bản)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '470 km (NEDC, thực tế ~380-420 km)',
          '500-600 km (xăng, thực tế ~450 km; bình 45L)',
          '500-650 km (xăng, thực tế ~450 km; bình 45L)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '204 mã lực (150 kW), 280 Nm',
          '102 mã lực, 141 Nm',
          '105 mã lực, 138 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc/nạp',
        values: [
          '30 phút (10-70% DC 80kW); 8 giờ AC đầy',
          'N/A (xăng); 5 phút đầy bình',
          'N/A (xăng); 5 phút đầy bình',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (dự kiến ASEAN NCAP; 6 túi khí, ABS, ESC, ADAS, camera 360°)',
          '4 sao (ASEAN NCAP; 2-6 túi khí tùy bản, ABS, ESC)',
          '5 sao (ASEAN NCAP; 6 túi khí, ABS, ESC, hỗ trợ tránh va chạm)',
        ],
      },
    ],
    content: {
      ct1: '<h1>VinFast Limo Green - MPV điện đa dụng cho gia đình và dịch vụ.</h1><p>Thiết kế 7 chỗ rộng rãi, Limo Green là MPV điện đầu tiên của VinFast, tối ưu cho vận tải hành khách và gia đình lớn.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
      ct2: '<h1>Limo Green - Không gian rộng lớn, tiện nghi cao.</h1><p>Với chiều dài vượt trội và hàng ghế thứ ba thoải mái, Limo Green mang đến sự tiện lợi cho mọi hành trình dài.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
      ct3: '<h1>Hiệu suất mạnh mẽ cho tải nặng.</h1><p>Mô-men xoắn cao gấp đôi đối thủ xăng, giúp vận hành mượt mà khi chở đầy 7 người và hành lý.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
      ct4: '<h1>Limo Green - An toàn hàng đầu cho hành khách.</h1><p>Hệ thống ADAS tiên tiến và 6 túi khí đảm bảo an toàn tối đa, phù hợp cho dịch vụ taxi và gia đình.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
      ct5: '<h1>Limo Green - Công nghệ xanh cho tương lai.</h1><p>Pin LFP bền bỉ và sạc nhanh, kết hợp thiết kế đột phá cho di chuyển bền vững.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
      ct6: '<h1>Limo Green - Nội thất sang trọng cho 7 người.</h1><p>Không gian ba hàng ghế rộng rãi, điều hòa đa vùng, tạo trải nghiệm thoải mái cho mọi hành khách.</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
];