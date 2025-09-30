export interface VinFastModel {
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

export const vinFastData: VinFastModel[] = [
  {
    id: 'vf3',
    model: 'VF3',
    type: "vf",
    specs: {
      'Động cơ': '01 Motor, 32 kW / 43.5 PS',
      'Mô-men xoắn': '110 Nm',
      'Tăng tốc': '5.3s (0-50km/h)',
      'Quãng đường': '215 km (theo NEDC/WLTP)',
      'Thời gian sạc nhanh': '36 phút (10%-70%)',
      'Dẫn động': 'RWD (Dẫn động cầu sau)',
      'Dung lượng pin': '18.64 kWh',
      'Kích thước': '3.190 x 1.679 x 1.622 mm',
      'Khoảng sáng gầm': '191 mm',
      'Dung tích cốp / Số ghế': '285 lít / 4 ghế',
    },
    vfNameInComp: 'VinFast VF3 (Việt Nam)',
    competitors: ['MG Comet EV (Ấn Độ)', 'Tata Tiago EV (Ấn Độ)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '299 triệu VNĐ (bản mua pin, đã bao gồm ưu đãi trước 30/9/2025; bản thuê pin ~235 triệu + phí hàng tháng)',
          '190-265 triệu VNĐ (7-9.8 lakh INR, bản cao cấp ~265 triệu)',
          '215-300 triệu VNĐ (8-11 lakh INR, tùy pin 19.2/24 kWh)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '210-215 km (NEDC, thực tế ~150-180 km)',
          '230 km (ARAI, thực tế ~180-200 km)',
          '250-315 km (ARAI, tùy pin; thực tế ~200-280 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '43 PS (32 kW), 110 Nm',
          '41 PS (30 kW), 110 Nm',
          '61 PS (45 kW), 110 Nm (tùy bản)',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '36 phút (10-70% DC); 6-7 giờ AC đầy',
          '45 phút (10-100% AC, không DC nhanh); ~7 giờ đầy',
          '50-58 phút (10-90% DC); 3.6-8.8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (ASEAN NCAP dự kiến, dựa trên cấu trúc pin LFP an toàn; có ABS, EBD, ESC, 2 túi khí, hỗ trợ khởi hành ngang dốc, camera lùi)',
          '4 sao (Global NCAP, có ABS, EBD, 2 túi khí, kiểm soát ổn định; yếu ở bảo vệ trẻ em)',
          '4 sao (Global NCAP, cao nhất phân khúc; có ABS, EBD, 2 túi khí, kiểm soát ổn định, hỗ trợ phanh khẩn cấp)',
        ],
      },
    ],
    content: {
    ct1: '<h1 class="uppercase font-bold text-3xl">VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p><iframe width="1230" height="722" src="https://www.youtube.com/embed/z56derDAHVo" title="VINFAST VF 3 - CẢM HỨNG TỪ THẾ GIỚI TRUYỆN TRANH | OFFICIAL TVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
    ct2: `<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1>
              <p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, 
              VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. 
              Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>
              <div><img src="/images/vf3-2.jpg" alf="Ảnh vf3" /><img src="/images/vf3-3.jpg" alf="Ảnh vf3" /></div>`,
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'vf5',
    model: 'VF5',
    type: "vf",
    specs: {
      'Động cơ': '01 Motor, 100 kW / 134 PS',
      'Mô-men xoắn': '135 Nm',
      'Tăng tốc': '10.9s (0-100km/h)',
      'Quãng đường': '326 km (theo NEDC/WLTP)',
      'Thời gian sạc nhanh': '30 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '37.23 kWh',
      'Kích thước': '3.967 x 1.723 x 1.578 mm',
      'Khoảng sáng gầm': '168 mm',
      'Dung tích cốp / Số ghế': 'Khoảng 300 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast VF5 Plus',
    competitors: ['BYD Dolphin GLX', 'ORA Good Cat (bản cao cấp)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '508 triệu VNĐ (niêm yết 529 triệu, sau ưu đãi 4% + hỗ trợ lăn bánh; kèm pin)',
          '659 triệu VNĐ (niêm yết, không ưu đãi lớn)',
          '538-588 triệu VNĐ (niêm yết, tùy pin LFP/Ternary)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '326 km (NEDC, thực tế ~260 km)',
          '405 km (NEDC, thực tế ~320 km)',
          '420 km (NEDC, thực tế ~340 km)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '134 mã lực (100 kW), 135 Nm',
          '94 mã lực (70 kW), 180 Nm',
          '171 mã lực (126 kW), 250 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '30 phút (10-70% DC); 6 giờ AC đầy',
          '30 phút (30-80% DC); 6.5 giờ AC đầy',
          '45 phút (0-80% DC); 8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '4-5 sao (dự kiến ASEAN NCAP; 6 túi khí, ABS, EBD, ESC, ADAS Level 2, camera 360°, hỗ trợ phanh khẩn cấp)',
          '5 sao (Euro NCAP; 7 túi khí, ABS, ESC, hỗ trợ tránh va chạm, cảnh báo lệch làn)',
          '5 sao (C-NCAP; 6 túi khí, ABS, EBD, kiểm soát ổn định, hỗ trợ đỗ xe)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 5 Plus. Xứng danh “đàn anh” Xanh Sành hợp ví</h1><p>Sống thần thái và phong cách cùng dải màu mới đầy cảm hứng đến từ “đàn anh” VF 5 Plus. VF 5 Plus với dải màu đa dạng, gồm 4 màu cơ bản đã có là Xám, Đỏ, Xanh dương, Trắng; và 4 màu nâng cao mới là Vàng, Hồng tím, Xanh dương nhạt và Xanh lá nhạt.</p>',
      ct11: '<h3>VF 5 – Summer Yellow</h3><h4 class="uppercase">Tự Teen Dẫn Lối Tự Do</h4><p>Chọn khai mở cung đường mới thay vì lối mòn rập khuôn, năng lượng từ Summer Yellow giúp Kaity tự tin vào chất trẻ trung trong mình – để tinh thần tự do phóng khoáng luôn vượt lên những rào cản không tên. Giới hạn sẽ không bao giờ nằm trong từ điển cuộc sống, một khi có sắc vàng của VinFast 5 Plus dẫn lối.</p>',
      ct12: '<h3>VF 5 – Urban mint</h3><h4 class="uppercase">Phiêu nhịp sống xanh</h4><p>Hiện đại với sắc xanh tươi mát, sống động và thân thiện với môi trường. Màu xanh mint mang đến cho Hà cảm giác tươi mới, đầy năng lượng, giúp Hà tận hưởng nhịp sống đô thị một cách trọn vẹn và đầy cảm hứng.</p>',
      ct13: '<h3>VF 5 – Aquatic Azure</h3><h4 class="uppercase">Chuyển động đa Z năng</h4><p>Hơn cả một màu sắc, Aquatic Azure đối với Amee đại diện cho cá tính đậm nét Gen Z, chất “đa-zi-năng” và phong cách trẻ trung năng động. Mọi chuyển động cùng sắc xanh Aquatic Azure chính là tuyên ngôn cho thần thái khác biệt của hội Gen Z.</p>',
      ct14: '<h3>VF 5 – Zenith Grey</h3><h4 class="uppercase">Toàn tâm công tác</h4><p>Lựa chọn sắc xám chính là lựa chọn thành công – toàn tâm toàn ý cho mọi “công task” trên hành trình sự nghiệp. Là biểu tượng của sự uy tín và mạnh mẽ, GreyD tin rằng Zenith Grey sẽ mang đến thần thái chuyên nghiệp, đẳng cấp và tự tin trên mọi con đường bạn lựa chọn.</p>',
      ct15: null,
      ct16: null,
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'vf6',
    model: 'VF6',
    type: "vf",
    specs: {
      'Động cơ': '01 Motor, 125 kW / 174 PS',
      'Mô-men xoắn': '250 Nm',
      'Tăng tốc': '8.9s (0-100km/h)',
      'Quãng đường': '399 km (theo WLTP)',
      'Thời gian sạc nhanh': '25 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '59.6 kWh',
      'Kích thước': '4.238 x 1.820 x 1.594 mm',
      'Khoảng sáng gầm': '170 mm',
      'Dung tích cốp / Số ghế': 'Khoảng 400 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast VF6 (Eco/Plus)',
    competitors: ['BYD Atto 3 (Dynamic/Premium)', 'Hyundai Kona Electric (Standard/Long Range)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '675-749 triệu VNĐ (Eco 675 triệu, Plus 749 triệu sau ưu đãi 4%; lăn bánh ~720-800 triệu, kèm pin)',
          '766-886 triệu VNĐ (Dynamic 766 triệu, Premium 886 triệu; lăn bánh ~850-980 triệu)',
          '850-950 triệu VNĐ (ước tính nhập khẩu, bản Standard ~850 triệu; chưa ưu đãi lớn)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '399-468 km (NEDC, thực tế ~350-420 km; pin 59.6 kWh)',
          '410-480 km (NEDC, thực tế ~350-420 km; pin 49.92-60.48 kWh)',
          '420 km (EPA, thực tế ~350 km; pin 64.8 kWh)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '174-201 mã lực (128-150 kW), 250-310 Nm',
          '204 mã lực (150 kW), 310 Nm',
          '201 mã lực (150 kW), 255 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '25-30 phút (10-70% DC); 6-7 giờ AC đầy',
          '30 phút (10-80% DC); 7-9 giờ AC đầy',
          '43 phút (10-80% DC); 5-6 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (dự kiến ASEAN NCAP/Global NCAP; 8 túi khí, ABS, EBD, ESC, 20 ADAS Level 2 như hỗ trợ phanh khẩn cấp, camera 360°, cảnh báo lệch làn)',
          '5 sao (Euro NCAP/ASEAN NCAP; 7 túi khí, 91% bảo vệ người lớn, ABS, ESC, hỗ trợ tránh va chạm, cảnh báo điểm mù)',
          '5 sao (Euro NCAP/ASEAN NCAP; 6 túi khí, ABS, ESC, ADAS nâng cao, hỗ trợ tránh va chạm, cảnh báo lệch làn)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'vf7',
    model: 'VF7',
    type: "vf",
    specs: {
      'Động cơ': '01 Motor, 150 kW / 201 PS',
      'Mô-men xoắn': '310 Nm',
      'Tăng tốc': '9.5s (0-100km/h)',
      'Quãng đường': '450 km (theo WLTP)',
      'Thời gian sạc nhanh': '24 phút (10%-70%)',
      'Dẫn động': 'FWD (Dẫn động cầu trước)',
      'Dung lượng pin': '70 kWh',
      'Kích thước': '4.545 x 1.890 x 1.636 mm',
      'Khoảng sáng gầm': '170 mm',
      'Dung tích cốp / Số ghế': 'Khoảng 500 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast VF7 (Eco/Plus)',
    competitors: ['BYD Seal (Advanced/Performance)', 'Hyundai Ioniq 5 (Standard/Long Range)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '850-990 triệu VNĐ (Eco 850 triệu, Plus 990 triệu sau ưu đãi 4% + miễn phí sạc đến 2027; lăn bánh ~900-1.050 triệu, kèm pin)',
          '1.119-1.359 tỷ VNĐ (Advanced 1.119 tỷ, Performance 1.359 tỷ; lăn bánh ~1.200-1.450 tỷ, không ưu đãi lớn)',
          '1.3-1.45 tỷ VNĐ (Standard ~1.3 tỷ, Long Range ~1.45 tỷ; lăn bánh ~1.4-1.6 tỷ, nhập khẩu)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '375-431 km (WLTP, thực tế ~320-380 km; pin 59.6-75.3 kWh)',
          '520-570 km (WLTP, thực tế ~450-500 km; pin 82.5 kWh)',
          '420-480 km (EPA, thực tế ~350-420 km; pin 63-84 kWh)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '174-349 mã lực (130-258 kW), 250-500 Nm',
          '204-530 mã lực (150-390 kW), 360 Nm',
          '168-320 mã lực (125-239 kW), 350 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '25-30 phút (10-70% DC); 6-7 giờ AC đầy',
          '30 phút (30-80% DC 150 kW); 7-9 giờ AC đầy',
          '18-20 phút (10-80% DC 350 kW); 5-7 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (dự kiến ASEAN NCAP; 8 túi khí, ABS, EBD, ESC, ADAS Level 2 với 20 tính năng như phanh khẩn cấp, camera 360°, cảnh báo lệch làn)',
          '5 sao (Euro NCAP; 7 túi khí, ABS, ESC, ADAS với tránh va chạm, cảnh báo điểm mù, 91% bảo vệ người lớn)',
          '5 sao (Euro NCAP/ASEAN NCAP; 7 túi khí, ABS, ESC, ADAS nâng cao với tránh va chạm, cảnh báo lệch làn, 90% bảo vệ người lớn)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'vf8',
    model: 'VF8',
    type: "green",
    specs: {
      'Động cơ': '02 Motor, 201 kW / 348 PS',
      'Mô-men xoắn': '620 Nm',
      'Tăng tốc': '6.0s (0-100km/h)',
      'Quãng đường': '425 km (theo WLTP)',
      'Thời gian sạc nhanh': '31 phút (10%-70%)',
      'Dẫn động': 'AWD (Dẫn động 4 bánh)',
      'Dung lượng pin': '87.7 kWh',
      'Kích thước': '4.750 x 1.934 x 1.667 mm',
      'Khoảng sáng gầm': '175 mm',
      'Dung tích cốp / Số ghế': 'Khoảng 700 lít / 5 ghế',
    },
    vfNameInComp: 'VinFast VF8 (Eco/Plus)',
    competitors: ['BYD Seal (Advanced/Performance)', 'Hyundai Ioniq 5 (Standard/Long Range)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '1.019-1.199 tỷ VNĐ (Eco 1.019 tỷ, Plus 1.199 tỷ sau ưu đãi 4% + miễn phí sạc đến 2027; lăn bánh ~1.1-1.3 tỷ, kèm pin)',
          '1.119-1.359 tỷ VNĐ (Advanced 1.119 tỷ, Performance 1.359 tỷ; lăn bánh ~1.2-1.45 tỷ, không ưu đãi lớn)',
          '1.3-1.45 tỷ VNĐ (Standard ~1.3 tỷ, Long Range ~1.45 tỷ; lăn bánh ~1.4-1.6 tỷ, lắp ráp trong nước)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '420-471 km (NEDC, thực tế ~370-420 km; pin 87.7 kWh)',
          '460-520 km (WLTP, thực tế ~400-460 km; pin 61.4-82.5 kWh)',
          '384-451 km (WLTP, thực tế ~320-400 km; pin 58-72.6 kWh)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '350-402 mã lực (258-300 kW), 620 Nm',
          '204-530 mã lực (150-390 kW), 360-670 Nm',
          '170-217 mã lực (125-160 kW), 350 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '24 phút (10-80% DC); 6-7 giờ AC đầy',
          '30 phút (10-80% DC); 7-9 giờ AC đầy',
          '18 phút (10-80% DC); 6.6 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (dự kiến ASEAN NCAP/Euro NCAP; 11 túi khí, ABS, EBD, ESC, ADAS Level 2 với 20 tính năng như phanh khẩn cấp, camera 360°, cảnh báo lệch làn)',
          '5 sao (Euro NCAP; 7-9 túi khí, ABS, ESC, ADAS với tránh va chạm, cảnh báo điểm mù, 91% bảo vệ người lớn)',
          '5 sao (Euro NCAP/ASEAN NCAP; 7 túi khí, ABS, ESC, ADAS nâng cao với tránh va chạm, cảnh báo lệch làn, 90% bảo vệ người lớn)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
  {
    id: 'vf9',
    model: 'VF9',
    type: "green",
    specs: {
      'Động cơ': '02 Motor, 300 kW / 402 PS',
      'Mô-men xoắn': '620 Nm',
      'Tăng tốc': '6.6s (0-100km/h)',
      'Quãng đường': '530 km (theo WLTP)',
      'Thời gian sạc nhanh': '35 phút (10%-70%)',
      'Dẫn động': 'AWD (Dẫn động 4 bánh)',
      'Dung lượng pin': '123 kWh',
      'Kích thước': '5.120 x 2.229 x 1.776 mm',
      'Khoảng sáng gầm': '175 mm',
      'Dung tích cốp / Số ghế': 'Khoảng 1.000 lít / 7 ghế',
    },
    vfNameInComp: 'VinFast VF9 (Eco/Plus)',
    competitors: ['BYD Tang EV (AWD)', 'Tesla Model Y (Long Range AWD)'],
    comparisons: [
      {
        parameter: 'Giá bán (ước tính)',
        values: [
          '1.491-1.636 tỷ VNĐ (Eco 1.491 tỷ, Plus 1.636 tỷ sau ưu đãi 4% + miễn phí sạc đến 2027; lăn bánh ~1.6-1.8 tỷ, kèm pin)',
          '1.569 tỷ VNĐ (niêm yết duy nhất; lăn bánh ~1.7 tỷ, không ưu đãi lớn)',
          '1.5-1.8 tỷ VNĐ (quy đổi từ ~65.000 USD, tùy phiên bản; lăn bánh ~1.6-1.9 tỷ, nhập khẩu)',
        ],
      },
      {
        parameter: 'Phạm vi hoạt động',
        values: [
          '485-680 km (NEDC, thực tế ~420-600 km; pin 123 kWh)',
          '600-730 km (CLTC, thực tế ~520-650 km; pin 108.8 kWh)',
          '482-611 km (WLTP, thực tế ~420-550 km; pin 75-81 kWh)',
        ],
      },
      {
        parameter: 'Công suất',
        values: [
          '402 mã lực (300 kW), 620 Nm',
          '517 mã lực (380 kW), 700 Nm',
          '384-450 mã lực (283-331 kW), 510 Nm',
        ],
      },
      {
        parameter: 'Thời gian sạc',
        values: [
          '26-35 phút (10-70% DC); 11 giờ AC đầy',
          '30 phút (10-80% DC); 8-10 giờ AC đầy',
          '15-25 phút (10-80% DC Supercharger); 6-8 giờ AC đầy',
        ],
      },
      {
        parameter: 'Điểm an toàn',
        values: [
          '5 sao (Euro NCAP/NHTSA/ASEAN NCAP dự kiến; 11 túi khí, ABS, EBD, ESC, ADAS Level 2 với 20 tính năng như phanh khẩn cấp, camera 360°, hỗ trợ tắc đường, triệu tập xe)',
          '5 sao (C-NCAP/Euro NCAP; 7 túi khí, ABS, ESC, ADAS với tránh va chạm, cảnh báo lệch làn, kiểm soát ổn định)',
          '5 sao (Euro NCAP/NHTSA; 8 túi khí, ABS, ESC, Autopilot ADAS với tránh va chạm, giữ làn, camera 360°)',
        ],
      },
    ],
    content: {
    ct1: '<h1>VinFast VF 3 - Xe nhỏ, giá trị lớn.</h1><p>Với thiết kế tối giản, nhỏ gọn, cá tính và năng động, VinFast VF 3 sẽ luôn cùng bạn hoà nhịp với xu thế công nghệ di chuyển xanh toàn cầu, trải nghiệm giá trị trên mỗi hành trình, và tự do thể hiện phong cách sống.</p>',
      ct11: null,
      ct12: null,
      ct13: null,
      ct14: null,
      ct15: null,
      ct16: null,
    ct2: '<h1>VinFast VF 3 - Tự do sáng tạo, toả sáng chất riêng!</h1><p>Với dải màu ngoại thất đa dạng và độc đáo, bao gồm 7 tùy chọn màu sắc trẻ trung và thời thượng, VF 3 là sự lựa chọn hoàn hảo giúp bạn thoả sức thể hiện sự khác biệt và cá tính của riêng mình. Dù bạn là ai, hãy lựa chọn màu sắc và trang bị VF 3 theo sở thích của bạn, và cùng VinFast biến ước mơ của bạn thành hiện thực.</p>',
      ct21: null,
      ct22: null,
      ct23: null,
      ct24: null,
      ct25: null,
      ct26: null,
    ct3: '<h1>La-zăng vượt trội về kích thước & phong cách.</h1><p>VF 3 là mẫu xe hiếm hoi trong phân khúc xe sở hữu la-zăng kích thước 16 inch, không chỉ tạo điểm nhấn về thiết kế mà còn góp phần gia tăng khả năng di chuyển trên địa hình đa dạng trong đô thị. Đặc biệt, VF 3 được trang bị tuỳ chọn ốp la-zăng, tăng thêm vẻ cá tính, sự sang trọng cho chiếc xe.</p>',
      ct31: null,
      ct32: null,
      ct33: null,
      ct34: null,
      ct35: null,
      ct36: null,
    ct4: '<h1>VinFast VF 3 - Biểu tượng mới của cuộc sống đô thị.</h1><p>Vượt lên trên một phương tiện di chuyển thông thường, VinFast VF 3 là biểu tượng mới mang tính cách mạng trong cuộc sống đô thị. Với thiết kế hiện đại, hiệu suất vận hành linh hoạt, tính năng an toàn tiên tiến, cùng chi phí vận hành siêu rẻ, VF 3 sẽ mở ra một cách tiếp cận hoàn toàn mới trong việc lựa chọn phương tiện di chuyển hàng ngày, mang lại sự thuận tiện, dễ dàng và đặc biệt thoải mái cho tất cả mọi người.</p>',
      ct41: null,
      ct42: null,
      ct43: null,
      ct44: null,
      ct45: null,
      ct46: null,
    ct5: '<h1>VF 3 không chỉ là một chiếc xe điện tiên tiến.</h1><p>Mà còn là một tác phẩm nghệ thuật kết hợp giữa công nghệ và sự sáng tạo trong thiết kế.</p>',
      ct51: null,
      ct52: null,
      ct53: null,
      ct54: null,
      ct55: null,
      ct56: null,
    ct6: '<h1>VinFast VF 3 - Luôn đủ chỗ cho mọi người!</h1><p>Thiết kế thông minh và không gian nội thất tối ưu hóa của VF 3 mang lại trải nghiệm di chuyển tiện lợi, đảm bảo sự thoải mái và tiện nghi cho cả 4 chỗ ngồi. Màu sắc nội thất trang nhã, trẻ trung và cá tính, cùng chất liệu thân thiện tạo ra một không gian đặc biệt, nơi chứa đựng những kỷ niệm đáng nhớ trên mọi hành trình khám phá phong cách sống của riêng bạn!</p>',
      ct61: null,
      ct62: null,
      ct63: null,
      ct64: null,
      ct65: null,
      ct66: null,
    }
  },
];