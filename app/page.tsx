'use client'

import { useState, useRef } from 'react';
import Image from 'next/image'


export default function HomePage() {
  const sectionSearch = useRef<HTMLDivElement>(null)
  const searchBackgroundBlur = useRef(null)

  const scrollToSearch = () => {
    sectionSearch?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>

      <section className="bg-[#F5E652] px-6 lg:px-32 text-[#212E3D]">
        <div className="h-[100svh] md:h-screen relative">
          <header className="flex pt-6 md:pt-8 relative z-40">
            <svg className="w-auto h-10 md:h-12" viewBox="0 0 153 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_235_917)"><path d="M84.9083 3.24249e-05L82.3539 1.31838L71.8453 13.3464L73.6923 15.5252L71.6863 16.5918L63.077 8.96719L63.0742 8.97238L60.515 10.3578L60.0231 11.2887L60.0668 9.20056L46.0705 13.6636L46.0708 13.671L43.4911 15.0526L43.8577 22.5236L46.2719 21.9143L46.4226 23.5729C44.3836 23.2838 42.2059 23.5741 40.1382 24.446C39.2394 24.837 38.4014 25.3174 37.6292 25.8762C38.1539 23.5588 38.0294 21.2744 37.1448 19.237C36.1001 16.8296 34.2618 14.8401 32.0077 13.5848C30.4275 12.5341 28.5439 11.8795 26.5732 11.6568C21.73 10.8118 15.9143 11.6793 10.1905 14.1133C8.08626 15.0093 6.12351 16.026 4.35316 17.1515L2.11553 18.568L2.11703 18.5709L0 20.7178L6.82823 32.2226L9.39697 31.122L20.387 56L30.8278 52.6382L33.3275 50.9613L33.3977 50.939L32.7459 48.4285L31.2049 42.5237C32.025 44.121 33.2519 45.2946 33.2519 45.2946C34.3613 46.377 35.7211 47.1647 37.2382 47.6068C40.1561 48.4449 43.4493 47.8986 46.2763 46.0993C46.9039 45.7029 47.7195 45.1049 48.3296 44.5722L48.6795 48.4234L58.5157 46.9711L61.1427 45.5967L61.1474 45.5961L61.1366 39.39L79.2092 48.3255L81.7767 46.9416L81.7636 46.9347V38.4528L81.7676 38.4737C83.8809 38.1598 85.6948 37.3791 87.4782 36.3092C87.5091 36.2909 87.5405 36.2701 87.5715 36.2513L86.7951 40.9625L97.9328 42.7416L100.072 41.5915L101.435 44.1056L103.451 42.9999L103.852 46.314L116.505 48.5537L119.033 47.1659L118.931 47.1363L119.041 47.1557L118.553 44.0698C119.426 43.9711 120.334 43.8539 121.116 43.5762C121.427 43.4697 121.864 43.2956 122.332 43.0903L121.83 47.5336L130.218 48.7392L130.299 52.149L139.002 54.9176L141.592 53.5473L141.585 53.5415L141.604 53.5475L153 19.2639L141.133 16.385L141.129 16.4031L139.269 17.3922L138.964 15.8871L125.02 12.8236V12.823L122.445 14.2103L122.531 21.259C121.081 21.2253 119.586 21.4758 118.135 22.0232C117.115 22.4125 116.168 22.9242 115.31 23.5464L113.206 10.2919H103.979L103.977 10.2824L103.959 10.2919H103.932L103.929 10.3075L101.382 11.6756L101.357 11.8161H93.9159L93.9021 11.9002L93.9033 11.8036L91.3704 13.1947L90.8421 16.4014C88.5756 14.2814 85.6202 13.1216 82.3987 13.0543L90.6861 8.6083L84.9074 0.000557663L84.9011 0.00771475L84.9083 3.24249e-05ZM84.4624 3.82325L87.5182 7.9665L78.7817 12.2893L78.1784 11.3742L84.4624 3.82325ZM106.376 12.8578H111.099L113.059 25.5739C110.565 28.4098 109.353 32.2221 110.186 35.7097C110.831 38.4135 112.496 40.5909 114.882 41.8627C115.122 41.9834 115.371 42.1028 115.628 42.206L115.877 43.8545L108.912 42.7927L107.058 30.5314L104.436 37.2953L100.509 28.8414H100.464L98.9126 38.6315L92.3676 37.4948L93.288 32.0317C93.535 31.7999 93.7781 31.5675 94.0172 31.3221L96.1385 29.1418L94.0766 27.2991L96.2673 14.2886H102.871L104.523 23.2951L106.376 12.8578ZM63.9963 13.0311L70.1207 18.853L61.5557 27.8595L69.6026 31.0364C70.5014 32.7366 71.8724 34.1813 73.5928 35.2456C75.2559 36.2702 77.1614 36.8759 79.177 37.0748L79.1782 42.835L58.7066 32.6154L58.7249 38.0117L58.576 38.1239L58.7255 38.1978L58.7428 43.323L53.4473 44.0439L53.0782 39.6301C54.7134 36.8316 55.3113 33.534 54.4579 30.51C53.9895 28.8478 53.1242 27.405 51.9483 26.2489L51.1887 17.2498L48.8106 17.8654L48.7057 15.5899L57.2098 13.0624L57.3999 16.2542L57.3882 16.2762L57.4011 16.2722L57.7313 21.817L63.9963 13.0311ZM22.7893 14.0762C23.9484 14.0785 25.0549 14.173 26.0961 14.3566C27.5695 14.5221 29.1291 14.9557 30.4952 15.8608C32.3694 16.9143 33.8031 18.4139 34.6298 20.3238C36.646 24.9743 33.2779 31.6667 26.6116 35.7732L30.0971 49.1222L24.4555 50.9211L12.8792 25.1161C12.2495 25.4465 11.0865 26.0005 10.0185 26.523L5.82656 19.4549C7.49357 18.3923 9.32177 17.4504 11.2664 16.6303C15.3596 14.8927 19.312 14.0694 22.7893 14.0762ZM81.9827 15.7003C85.2583 15.6614 88.0757 16.9988 89.9627 19.3099L81.438 28.3666C82.016 28.4754 82.9352 28.3241 83.6138 28.162C84.8361 27.8645 85.7332 27.3554 86.4729 26.7422C86.4654 26.7522 86.4572 26.7618 86.4502 26.7721C86.4894 26.7363 86.5276 26.705 86.568 26.6721L86.5639 26.6675C87.0149 26.282 87.4076 25.8581 87.7813 25.4205L91.188 28.4795L92.2201 29.4101C91.7727 29.872 91.3028 30.308 90.827 30.7064C88.8625 32.3283 86.6231 33.3857 83.6644 34.0992C83.0177 34.2471 82.3838 34.3547 81.7638 34.4091C77.0677 34.8698 73.1279 32.7177 71.6329 29.2267C71.4467 28.8039 71.303 28.3758 71.1945 27.919C70.503 24.9789 71.0936 22.3512 72.5488 20.2923C72.9679 19.6916 73.4652 19.144 74.0239 18.6509C75.3945 17.4302 77.1443 16.5427 79.1338 16.0655C80.1124 15.83 81.0657 15.7114 81.9829 15.7005L81.9827 15.7003ZM127.493 16.0478L136.59 17.8726L139.648 32.3503L142.785 19.3705L149.705 20.8967L139.959 50.3544L135.905 49.1488L135.11 48.5343L134.697 31.1056L132.263 44.8448L126.983 44.0036L127.361 40.048C130.809 37.1402 132.637 32.553 131.635 28.3961C131.195 26.5554 130.247 24.9526 128.91 23.7342L129.356 19.069L127.36 18.5386L127.493 16.0478ZM122.233 23.5698C123.947 23.5425 125.529 24.0242 126.781 24.9228C127.518 25.4442 128.13 26.1078 128.612 26.8791C128.977 27.4883 129.261 28.1597 129.433 28.893C130.047 31.4308 129.316 34.1489 127.712 36.3387C127.025 37.2721 126.188 38.1108 125.222 38.7976C124.5 39.3105 123.706 39.7463 122.852 40.0608C121.166 40.7018 119.49 40.835 117.996 40.5386C116.954 40.3335 116.005 39.9283 115.179 39.3417C113.865 38.393 112.898 36.9921 112.471 35.233C111.974 33.1197 112.432 30.8632 113.571 28.8865C114.139 27.9202 114.867 27.0121 115.729 26.2295C116.69 25.3692 117.805 24.6648 119.045 24.1887C120.127 23.7858 121.204 23.5863 122.233 23.5698ZM68.3556 24.357C68.242 25.5391 68.3005 26.7754 68.5486 28.0289L65.7011 26.9322L65.7014 26.9319L68.3556 24.357ZM45.0574 25.5551C46.6721 25.5707 48.1695 26.0299 49.394 26.8603C50.7385 27.7705 51.7638 29.139 52.2424 30.8539C52.3026 31.0358 52.3423 31.227 52.3826 31.414C52.5194 32.0674 52.5745 32.7373 52.5484 33.3975C52.4837 35.385 51.7525 37.3765 50.5283 39.0613C49.3638 40.6906 47.737 42.0354 45.823 42.8577C40.9287 44.9273 36.0345 42.8576 34.7269 38.2196C33.4601 33.7351 36.4075 28.3968 41.1496 26.3577C42.4746 25.7994 43.8015 25.543 45.0574 25.5551ZM48.317 44.4322L48.3179 44.4409C48.3046 44.4455 48.291 44.4504 48.2773 44.4552C48.2904 44.4474 48.3039 44.4401 48.317 44.4322L48.317 44.4322Z" fill="#212E3D"></path><path d="M30.1704 25.1959C29.6599 22.462 26.0784 20.9551 22.5274 22.8882L23.4427 26.0171L24.8826 30.6409L25.5395 32.7469C28.2036 31.0371 30.8812 28.9827 30.1704 25.1959ZM26.6433 29.3998C26.2555 28.1366 25.405 25.409 25.405 25.409C25.409 25.4214 25.2375 24.8253 25.0342 24.1429C25.7871 24.0086 26.5104 24.063 27.1055 24.3486C27.4382 24.5068 28.023 24.8757 28.1508 25.575C28.4449 27.1471 27.914 28.2692 26.6433 29.3998Z" fill="#212E3D"></path><path d="M83.9026 20.8582C81.9176 19.0407 78.8323 19.1819 77.0216 21.1614C75.2002 23.1376 75.3433 26.2188 77.3311 28.0289C77.4929 28.1848 77.6678 28.3123 77.8438 28.4375L84.2467 21.1999C84.1337 21.0821 84.0201 20.9648 83.9026 20.8582ZM77.8569 25.9491C77.2306 24.8015 77.3572 23.3444 78.2935 22.3232C79.194 21.3439 80.5737 21.0651 81.7501 21.5179L77.8569 25.9491Z" fill="#212E3D"></path><path d="M125.337 27.3698C125.391 27.5846 125.419 27.7971 125.412 28.0233C125.353 29.3755 124.08 30.4194 122.561 30.3485C121.044 30.2964 119.853 29.1471 119.912 27.7983C119.963 26.5339 121.092 25.5331 122.486 25.4691C122.221 25.4095 121.945 25.3784 121.656 25.3682C119.117 25.2588 117.041 27.0542 116.953 29.2893C116.856 31.6797 118.775 33.6287 121.275 33.7369C123.818 33.8384 125.893 32.0368 125.994 29.6577C126.023 28.8331 125.779 28.0425 125.337 27.3698Z" fill="#212E3D"></path><path d="M48.2918 30.0997C48.2918 31.4576 47.0546 32.5457 45.5392 32.5457C44.0198 32.5457 42.7871 31.457 42.7871 30.0997C42.7871 28.8342 43.8716 27.7909 45.2615 27.6696C44.9952 27.6214 44.7181 27.5937 44.432 27.5937C41.8929 27.5937 39.8897 29.4735 39.8897 31.712C39.8897 34.1008 41.8934 35.9744 44.3911 35.9744C46.9325 35.9744 48.9339 34.0996 48.9339 31.712C48.9339 30.8852 48.6603 30.106 48.1896 29.4644C48.2532 29.6577 48.2918 29.8719 48.2918 30.0997Z" fill="#212E3D"></path></g><defs><clipPath id="clip0_235_917"><rect width="153" height="56" fill="#212E3D"></rect></clipPath></defs></svg>
            <ul className="ml-auto flex items-center gap-4">
              <li>
                <a href="https://www.linkedin.com/in/harry-sawyer-b9a99425a" target="_blank">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2909 2.66667H4.70918C3.64106 2.65381 2.76444 3.50879 2.75061 4.57691V27.4237C2.76452 28.4918 3.64114 29.3465 4.70918 29.3333H27.2909C28.3591 29.3466 29.2359 28.4916 29.2495 27.4234V4.57691C29.2358 3.50871 28.3591 2.65364 27.2909 2.66667ZM10.784 24.9893H6.78137V12.948H10.784V24.9893ZM9.11104 11.3061C9.00174 11.314 8.89205 11.3133 8.78292 11.304H8.75662C7.60657 11.3734 6.61804 10.4973 6.5487 9.34725C6.47937 8.19719 7.35542 7.20867 8.50549 7.13933C8.60673 7.13323 8.70837 7.13453 8.80945 7.14316C9.95902 7.05991 10.9584 7.92433 11.0417 9.07391C11.125 10.2234 10.2605 11.2228 9.11104 11.3061ZM25.2156 24.9893H21.2136V18.5482C21.2136 16.9292 20.6341 15.8251 19.1861 15.8251C18.2611 15.8305 17.4392 16.4164 17.1324 17.2891C17.03 17.604 16.9853 17.9347 17.0006 18.2655V24.9893H12.9986C12.9986 24.9857 13.0511 14.0776 12.999 12.9482H17.001V14.6548C17.7386 13.3712 19.129 12.6044 20.6081 12.6656C23.2413 12.6656 25.2156 14.3866 25.2156 18.0851V24.9893H25.2156Z" fill="#1F2C3A"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/carlosdancr" target="_blank">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.77735C8.63619 2.77735 2.66663 8.74691 2.66663 16.1107C2.66663 22.008 6.49955 27.0023 11.8068 28.7611C12.453 28.8619 12.7 28.4728 12.7 28.1277C12.7 27.811 12.6833 26.7611 12.6833 25.6444C9.33329 26.2611 8.4666 24.8277 8.19999 24.0777C7.90401 23.3483 7.43493 22.702 6.83329 22.1944C6.36665 21.9444 5.69999 21.3277 6.81661 21.311C7.68193 21.4049 8.44715 21.915 8.86667 22.6777C8.86797 22.6801 8.86927 22.6824 8.87057 22.6847C9.64003 24.0578 11.3768 24.5471 12.75 23.7777C12.8077 23.0998 13.1098 22.4661 13.6 21.9944C10.6333 21.661 7.53333 20.511 7.53333 15.411C7.51453 14.0858 8.00355 12.8038 8.89995 11.8277C8.49231 10.6759 8.54 9.41203 9.03332 8.29435C9.03332 8.29435 10.1499 7.94433 12.7 9.66104C14.8817 9.06095 17.1849 9.06095 19.3667 9.66104C21.9166 7.92764 23.0333 8.29435 23.0333 8.29435C23.5266 9.41203 23.5743 10.6759 23.1666 11.8277C24.0657 12.8021 24.5551 14.0853 24.5333 15.411C24.5333 20.5277 21.4166 21.661 18.45 21.9944C19.0939 22.6469 19.4223 23.5471 19.35 24.461C19.35 26.2444 19.3333 27.6777 19.3333 28.1277C19.3324 28.1987 19.343 28.2694 19.3647 28.3371C19.4756 28.6822 19.8449 28.872 20.1901 28.7621C25.499 27.0042 29.3333 22.0091 29.3333 16.1107C29.3333 8.74691 23.3637 2.77735 16 2.77735Z" fill="#1F2C3A"></path></svg>
                </a>
              </li>
            </ul>
          </header>
          <div className="mt-16 md:mt-20 z-10 relative">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 md:mb-12">Harry&apos;s Pokies</h1>
            <p className="text-xl font-medium max-w-lg mb-8 md:mb-12">This a project made to show what I have been learning with React, Typescript, Unit Testing, Tailwind, API&apos;s, GitHub, Lint etc.</p>
            <button onClick={scrollToSearch} className="text-xl font-medium text-[#212E3D] w-fit flex items-center gap-2 px-8 py-3 border-2 border-[#212E3D] rounded-xl ease-in-out duration-75 bg-white hover:bg-[#212E3D] hover:text-white hover:shadow-xl shadow-[#212E3D]">
              Search Pokemon Now
            </button>
          </div>
          <Image className="absolute right-0 bottom-0 mb-5 md:mb-0 w-5/6 md:w-1/2" src="/images/pikchu-homepage.webp" alt="Pikachu" width="1000" height="0" />
        </div>
      </section>

      <section className="-mb-20 -mt-20 relative z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100px" viewBox="0 0 1440 191" preserveAspectRatio="none">
          <path fill="#6FC26D" opacity="1.000000" stroke="none" d=" M517.000000,1.000000   C522.688049,1.000000 528.376038,1.000000 534.357788,1.413583   C536.165833,2.217880 537.664551,2.848461 539.197815,2.948260   C542.182617,3.142540 545.217773,2.767683 548.177490,3.105913   C561.661133,4.646792 575.117554,6.424937 588.601318,7.964681   C593.835205,8.562355 599.133484,8.591582 604.369690,9.173942   C611.513794,9.968483 618.608826,11.216024 625.757446,11.954636   C634.087219,12.815282 642.456970,13.280396 650.800415,14.018705   C661.427490,14.959093 672.040344,16.061024 682.669067,16.980898   C691.363953,17.733404 700.067383,18.412239 708.777161,18.962578   C725.742676,20.034563 742.712646,21.042128 759.686157,21.978664   C767.946472,22.434439 776.221924,22.611858 784.484802,23.028376   C789.087341,23.260382 793.709595,23.498409 798.268127,24.129314   C809.083008,25.626070 819.842102,27.536451 830.666931,28.948114   C842.499023,30.491127 854.381836,31.641970 866.238342,33.000298   C874.032898,33.893280 881.815491,34.892429 889.611755,35.769218   C899.536072,36.885334 909.455994,38.581722 919.402405,38.777660   C926.510864,38.917702 933.647766,36.902748 940.793457,36.024258   C952.511597,34.583626 964.266174,33.428596 975.971069,31.892111   C992.515930,29.720274 1009.010742,27.161871 1025.562988,25.052038   C1037.930908,23.475565 1050.332153,22.034399 1062.761108,21.094482   C1080.041382,19.787687 1097.358398,18.953773 1114.665405,18.021816   C1123.258911,17.559067 1131.874023,17.478838 1140.462158,16.946569   C1147.346558,16.519888 1154.196655,15.561474 1161.077271,15.044863   C1167.157593,14.588350 1173.302124,13.813248 1179.342041,14.245473   C1191.438477,15.111128 1203.473022,16.806505 1215.552490,17.957417   C1221.629150,18.536398 1227.771240,18.442478 1233.842529,19.059666   C1245.231689,20.217478 1256.592529,21.657312 1267.962036,23.006187   C1275.934082,23.951986 1283.881714,25.164434 1291.875488,25.846266   C1299.278320,26.477703 1306.795166,27.337999 1314.140381,26.699266   C1324.199097,25.824554 1334.140137,23.610376 1344.137085,22.003895   C1354.297485,20.371109 1364.456299,18.723490 1374.631104,17.183865   C1386.436646,15.397505 1398.268188,13.782969 1410.070923,11.979369   C1420.393188,10.402003 1430.691284,8.665947 1441.000000,6.999999   C1441.000000,36.354229 1441.000000,65.708458 1440.544434,95.523865   C1429.123535,95.318893 1418.157227,94.669357 1407.193237,93.982956   C1387.424683,92.745369 1367.662354,91.400452 1347.888184,90.263489   C1333.269043,89.422928 1318.639526,88.431892 1304.006470,88.274208   C1292.373779,88.148857 1280.730591,89.226303 1269.088989,89.694084   C1243.804932,90.710037 1218.520874,91.741882 1193.231689,92.615273   C1187.611572,92.809357 1181.630493,93.552162 1176.391968,92.042648   C1137.857300,80.938644 1099.442749,69.413338 1061.056274,57.803406   C1053.164551,55.416580 1045.597778,53.621647 1037.221069,55.780838   C1028.862671,57.935291 1020.229736,59.086220 1011.675964,60.410690   C969.755676,66.901649 928.422424,77.019348 885.850769,79.542587   C848.298828,81.768326 810.813354,85.120277 773.300537,88.000908   C740.934509,90.486313 708.582214,93.166275 676.199707,95.413162   C667.057861,96.047478 658.058472,97.912514 648.621948,94.571701   C608.939331,80.522865 569.024170,67.130325 529.161438,53.593639   C526.898804,52.825291 524.234070,52.287117 521.944641,52.695797   C493.095947,57.845558 464.255981,63.053360 435.466888,68.525627   C411.411591,73.098091 387.353302,77.156998 362.770844,77.921104   C338.983185,78.660492 315.227783,80.410706 291.454102,81.637474   C281.481140,82.152107 271.363647,83.698036 261.544159,82.633110   C232.275162,79.458878 203.156021,74.926338 173.910492,71.504364   C153.644455,69.133072 133.600632,65.423424 112.863754,66.397964   C75.617340,68.148392 38.292229,68.224365 1.000000,69.000000   C1.000000,50.979103 1.000000,32.958210 1.425113,14.488331   C2.937399,14.357237 4.010930,14.889807 5.113851,14.959897   C16.479015,15.682154 27.850231,16.308393 39.217144,17.004187   C49.587830,17.638998 59.953484,18.356339 70.324570,18.984203   C87.292740,20.011457 104.252502,21.432648 121.236649,21.860582   C134.985153,22.206989 148.764709,21.351944 162.529755,21.000721   C174.796280,20.687733 187.062637,20.362837 199.327469,19.990520   C208.762253,19.704115 218.201385,18.929085 227.626587,19.087112   C248.488052,19.436890 269.175415,17.915754 289.834076,15.087444   C303.002808,13.284557 316.302399,12.460567 329.511383,10.923290   C345.129272,9.105667 360.674530,6.579549 376.322601,5.131289   C390.132385,3.853160 404.040253,3.634699 418.378296,2.975332   C427.813354,2.983404 436.777283,3.067104 445.734406,2.858041   C447.503082,2.816759 449.245483,1.648522 451.000000,1.000001   C461.687561,1.000000 472.375122,1.000000 483.866028,1.248169   C490.733521,1.649735 496.799500,1.969435 502.861267,1.903081   C507.576904,1.851463 512.287292,1.318844 517.000000,1.000000  z"/>
          <path fill="#005D6D" opacity="1.000000" stroke="none" d=" M1.000000,175.000000   C1.000000,152.312439 1.000000,129.624878 1.412551,106.505707   C21.608692,108.695992 41.373051,111.474770 61.180408,113.902771   C90.390358,117.483360 119.609459,121.013016 148.867096,124.171303   C164.560104,125.865334 180.341766,126.737831 196.083435,127.981186   C211.825851,129.224594 227.555725,130.676239 243.315781,131.627533   C251.717239,132.134644 260.535431,133.371216 268.539551,131.540985   C308.801910,122.334572 348.842957,112.163353 389.014832,102.552963   C392.190216,101.793320 396.020386,101.968689 399.125275,102.989708   C439.162292,116.155602 479.142090,129.497070 519.075989,142.973068   C523.586304,144.495117 527.631165,144.488663 532.140808,143.127289   C567.216553,132.538498 602.334717,122.089600 637.464966,111.682503   C644.472046,109.606712 651.523987,106.597054 658.663879,106.249420   C684.418945,104.995445 710.220398,104.695213 736.004333,104.033569   C748.479919,103.713432 760.954102,103.323669 773.431396,103.100426   C778.752686,103.005226 784.110107,102.925797 789.399353,103.407677   C808.437378,105.142151 827.454773,107.103760 846.477051,109.008987   C861.528870,110.516541 876.569031,112.145218 891.628540,113.570374   C901.053589,114.462303 910.707458,116.687393 919.908386,115.529816   C955.063538,111.106934 990.071411,105.518639 1025.146606,100.451523   C1033.523438,99.241379 1042.187866,96.562660 1050.309570,97.643410   C1086.089355,102.404556 1121.710449,108.350220 1157.409058,113.734192   C1166.108276,115.046188 1174.868042,116.505028 1183.627686,116.708633   C1191.891846,116.900726 1200.195312,115.563911 1208.476196,114.838600   C1237.955566,112.256577 1267.428467,109.600235 1296.914307,107.095146   C1302.177856,106.647972 1307.648071,105.895164 1312.756714,106.794907   C1355.539673,114.329956 1398.260498,122.218201 1441.000000,130.000000   C1441.000000,150.666702 1441.000000,171.333405 1441.000000,192.000000   C1437.933472,192.000000 1434.953247,192.000000 1431.507568,191.603668   C1428.921875,190.503143 1426.849121,189.556213 1424.674438,189.130707   C1384.685547,181.306732 1344.717529,173.369858 1304.670166,165.854797   C1288.143677,162.753510 1271.442017,160.585236 1254.819824,157.994751   C1240.317139,155.734589 1225.814453,153.474380 1211.310913,151.220078   C1200.388794,149.522461 1189.490601,146.680878 1178.535889,146.440460   C1165.535889,146.155151 1152.480957,148.043335 1139.460083,149.115753   C1124.634888,150.336761 1109.829956,151.811783 1094.999390,152.959244   C1083.772217,153.827896 1072.515991,154.313171 1061.278320,155.056168   C1056.661011,155.361450 1052.020630,155.652664 1047.456299,156.368225   C1029.696289,159.152466 1011.963013,162.107727 994.218689,164.992905   C978.266479,167.586685 962.332886,170.304733 946.353760,172.720963   C932.466125,174.820908 918.683716,177.911224 904.456604,177.048019   C894.850952,176.465210 885.219910,176.205795 875.596069,176.034760   C852.144226,175.617905 828.689148,175.380997 805.237244,174.967789   C799.778442,174.871628 794.329102,174.319458 788.871826,174.049393   C768.009460,173.016998 747.147217,171.977737 726.281555,171.016541   C716.831726,170.581238 707.365845,170.465439 697.921997,169.939728   C690.166931,169.508011 682.443237,168.505447 674.687744,168.088806   C667.950317,167.726868 661.097961,167.087112 654.455627,167.888779   C641.691467,169.429306 629.033875,171.867020 616.343262,173.999023   C597.475281,177.168777 578.647217,180.589386 559.745422,183.539841   C543.763000,186.034607 527.944946,190.223938 511.536896,188.987015   C508.242462,188.738678 504.966888,188.194351 501.670380,188.026566   C487.597534,187.310257 473.523071,186.610550 459.443604,186.042953   C440.871338,185.294250 422.290375,184.753281 403.721039,183.942917   C399.293457,183.749695 394.775391,183.307831 390.505493,182.190735   C354.256195,172.707230 318.057312,163.031219 281.836548,153.438416   C275.140625,151.665039 268.413269,148.576935 261.702209,148.581848   C245.999161,148.593353 230.297165,150.113022 214.594833,151.023376   C208.640640,151.368591 202.683029,151.664871 196.733261,152.074753   C178.079330,153.359833 159.415512,154.531586 140.781357,156.061783   C130.424500,156.912277 120.100395,158.248550 109.795219,159.619141   C97.366180,161.272217 84.974281,163.203644 72.563698,164.996521   C59.664291,166.860031 46.766514,168.735840 33.859161,170.542938   C22.912668,172.075470 11.953538,173.517776 1.000000,175.000000  z"/>
          <path fill="#009281" opacity="1.000000" stroke="none" d=" M1441.000000,129.531342   C1398.260498,122.218201 1355.539673,114.329956 1312.756714,106.794907   C1307.648071,105.895164 1302.177856,106.647972 1296.914307,107.095146   C1267.428467,109.600235 1237.955566,112.256577 1208.476196,114.838600   C1200.195312,115.563911 1191.891846,116.900726 1183.627686,116.708633   C1174.868042,116.505028 1166.108276,115.046188 1157.409058,113.734192   C1121.710449,108.350220 1086.089355,102.404556 1050.309570,97.643410   C1042.187866,96.562660 1033.523438,99.241379 1025.146606,100.451523   C990.071411,105.518639 955.063538,111.106934 919.908386,115.529816   C910.707458,116.687393 901.053589,114.462303 891.628540,113.570374   C876.569031,112.145218 861.528870,110.516541 846.477051,109.008987   C827.454773,107.103760 808.437378,105.142151 789.399353,103.407677   C784.110107,102.925797 778.752686,103.005226 773.431396,103.100426   C760.954102,103.323669 748.479919,103.713432 736.004333,104.033569   C710.220398,104.695213 684.418945,104.995445 658.663879,106.249420   C651.523987,106.597054 644.472046,109.606712 637.464966,111.682503   C602.334717,122.089600 567.216553,132.538498 532.140808,143.127289   C527.631165,144.488663 523.586304,144.495117 519.075989,142.973068   C479.142090,129.497070 439.162292,116.155602 399.125275,102.989708   C396.020386,101.968689 392.190216,101.793320 389.014832,102.552963   C348.842957,112.163353 308.801910,122.334572 268.539551,131.540985   C260.535431,133.371216 251.717239,132.134644 243.315781,131.627533   C227.555725,130.676239 211.825851,129.224594 196.083435,127.981186   C180.341766,126.737831 164.560104,125.865334 148.867096,124.171303   C119.609459,121.013016 90.390358,117.483360 61.180408,113.902771   C41.373051,111.474770 21.608692,108.695992 1.412551,106.037048   C1.000000,93.979103 1.000000,81.958214 1.000000,69.468658   C38.292229,68.224365 75.617340,68.148392 112.863754,66.397964   C133.600632,65.423424 153.644455,69.133072 173.910492,71.504364   C203.156021,74.926338 232.275162,79.458878 261.544159,82.633110   C271.363647,83.698036 281.481140,82.152107 291.454102,81.637474   C315.227783,80.410706 338.983185,78.660492 362.770844,77.921104   C387.353302,77.156998 411.411591,73.098091 435.466888,68.525627   C464.255981,63.053360 493.095947,57.845558 521.944641,52.695797   C524.234070,52.287117 526.898804,52.825291 529.161438,53.593639   C569.024170,67.130325 608.939331,80.522865 648.621948,94.571701   C658.058472,97.912514 667.057861,96.047478 676.199707,95.413162   C708.582214,93.166275 740.934509,90.486313 773.300537,88.000908   C810.813354,85.120277 848.298828,81.768326 885.850769,79.542587   C928.422424,77.019348 969.755676,66.901649 1011.675964,60.410690   C1020.229736,59.086220 1028.862671,57.935291 1037.221069,55.780838   C1045.597778,53.621647 1053.164551,55.416580 1061.056274,57.803406   C1099.442749,69.413338 1137.857300,80.938644 1176.391968,92.042648   C1181.630493,93.552162 1187.611572,92.809357 1193.231689,92.615273   C1218.520874,91.741882 1243.804932,90.710037 1269.088989,89.694084   C1280.730591,89.226303 1292.373779,88.148857 1304.006470,88.274208   C1318.639526,88.431892 1333.269043,89.422928 1347.888184,90.263489   C1367.662354,91.400452 1387.424683,92.745369 1407.193237,93.982956   C1418.157227,94.669357 1429.123535,95.318893 1440.544434,95.992523   C1441.000000,107.020897 1441.000000,118.041786 1441.000000,129.531342  z"/>
          <path fill="#A1CF63" opacity="1.000000" stroke="none" d=" M418.378296,2.975331   C418.168915,2.456455 418.433014,1.964575 418.348572,1.236347   C428.687561,1.000000 439.375122,1.000000 450.531342,1.000001   C449.245483,1.648522 447.503082,2.816759 445.734406,2.858041   C436.777283,3.067104 427.813354,2.983404 418.378296,2.975331  z"/>
          <path fill="#A1CF63" opacity="1.000000" stroke="none" d=" M516.531372,1.000000   C512.287292,1.318844 507.576904,1.851463 502.861267,1.903081   C496.799500,1.969435 490.733521,1.649735 484.334656,1.248169   C494.687561,1.000000 505.375122,1.000000 516.531372,1.000000  z"/>
        </svg>
      </section>

      <section ref={sectionSearch} className="bg-[#212E3D] relative">
        <div className="bg-[url('/images/pokeballs-background.webp')] bg-[length:300px] w-full h-full absolute opacity-5 grayscale"></div>
        <div className="px-6 md:px-32 py-40 h-fit">
          <div className="flex flex-col items-center mb-48 relative text-white">
            <div ref={searchBackgroundBlur} className="fixed h-screen w-screen bg-black/60 backdrop-blur top-0 z-40 hidden opacity-0"></div>
            <h2 className="font-medium text-4xl text-center mb-4 relative z-50">Have a favourite Pokemon?</h2>
            <div className="relative w-full md:w-2/4 flex items-center z-50">
              <svg className="absolute left-3 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 20 20" fill="none">
                <path d="M9.00012 9C9.00012 7.89543 9.89555 7 11.0001 7C12.1047 7 13.0001 7.89543 13.0001 9C13.0001 10.1046 12.1047 11 11.0001 11C10.4476 11 9.94893 10.7772 9.58591 10.4142C9.22289 10.0512 9.00012 9.55256 9.00012 9Z" fill="currentColor"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 18C14.4184 18 18.0001 14.4183 18.0001 10C18.0001 5.58172 14.4184 2 10.0001 2C5.58184 2 2.00012 5.58172 2.00012 10C2.00012 14.4183 5.58184 18 10.0001 18ZM11.0001 5C8.79098 5 7.00012 6.79086 7.00012 9C7.00012 9.74138 7.20242 10.4364 7.55409 11.0318L5.29302 13.2929C4.90249 13.6834 4.90249 14.3166 5.29302 14.7071C5.68354 15.0976 6.3167 15.0976 6.70723 14.7071L8.9683 12.446C9.56374 12.7977 10.2587 13 11.0001 13C13.2093 13 15.0001 11.2091 15.0001 9C15.0001 6.79086 13.2093 5 11.0001 5Z" fill="currentColor"/>
              </svg>
              <input onClick={scrollToSearch} className="w-full px-11 py-2 text-lg bg-[#233349] placeholder-slate-500 rounded-full border-2 border-slate-400 focus-visible:border-white outline-none" placeholder="Search by name or ID" />
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-64">
            <div className="group relative flex justify-center transition-all ease-out duration-300">
              <Image width="1000" height="1000" className="absolute -top-40 w-3/4 left-auto z-10 origin-bottom group-hover:scale-110 transition-all ease-out duration-300" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="Bulbasaur"/>
              <div className="bg-[#233349] text-white relative w-full h-[17rem] group-hover:h-[19.3rem] flex flex-col items-center border border-emerald-900/70 rounded-2xl overflow-hidden shadow-lg shadow-green-800 group-hover:shadow-xl group-hover:shadow-green-800 group-hover:scale-105 transition-all ease-out duration-300">
                <div className="w-32 h-32 bg-green-500 blur-[128px] group-hover:scale-125 transition-all ease-out duration-300"></div>
                  <div className="z-10 flex flex-col items-center">
                    <p className="text-xl font-bold">#001</p>
                    <p className="text-3xl font-bold mb-3 ">Bulbasaur</p>
                    <div className="flex gap-2 z-10">
                      <p className="px-2 py-0.5 rounded-full bg-green-500 flex gap-1.5">
                        <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/grass.81f4df08.svg" width="16" height="16" alt="grass" />
                        Grass
                      </p>
                      <p className="px-2 py-0.5 rounded-full bg-purple-500 flex gap-1.5">
                        <Image src="https://pokedex-react-carlosdancr.vercel.app/assets/poison.ba0642b1.svg" width="16" height="16" alt="grass" />
                        Poison
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full px-8">
                    <div className="w-fit mx-auto flex items-center gap-1 px-3 py-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-75 relative z-20 hover:bg-white hover:text-green-800">
                      <p className="uppercase relative font-medium">see stats</p>
                      <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0004 18C14.4186 18 18.0004 14.4183 18.0004 10C18.0004 5.58172 14.4186 2 10.0004 2C5.58209 2 2.00037 5.58172 2.00037 10C2.00037 14.4183 5.58209 18 10.0004 18ZM13.7075 9.29289L10.7075 6.29289C10.3169 5.90237 9.68378 5.90237 9.29326 6.29289L6.29326 9.29289C5.90274 9.68342 5.90274 10.3166 6.29326 10.7071C6.68378 11.0976 7.31695 11.0976 7.70747 10.7071L9.00037 9.41421L9.00037 13C9.00037 13.5523 9.44808 14 10.0004 14C10.5527 14 11.0004 13.5523 11.0004 13V9.41421L12.2933 10.7071C12.6838 11.0976 13.3169 11.0976 13.7075 10.7071C14.098 10.3166 14.098 9.68342 13.7075 9.29289Z" fill="currentColor"/>
                      </svg>
                    </div>
                  <div className="h-5 w-full bg-green-500 blur-[8px] scale-[6] translate-y-6"></div>
                </div>
              </div>
            </div>
          

        </div>
      </div>
      </section>
    </div>
  );
}
