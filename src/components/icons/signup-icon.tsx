import { cn } from "@/lib/utils";

const SignupIcon = ({ className }: { className: string }) => {
    return (
        <svg width="100" 
        height="100"
         viewBox="0 0 100 100"
          fill="none"
           xmlns="http://www.w3.org/2000/svg"
            className={(cn(className), "")}
        >
            <path d="M81.9328 60.3713C81.5677 60.2334 81.1625 60.2448 80.8061 60.4034C80.4496 60.5621 80.171 60.8552 80.032 61.2175C78.9745 63.9835 77.5195 66.583 75.7121 68.9354C75.2254 68.3337 74.7216 67.7434 74.2047 67.1789C77.8241 62.2736 79.7824 56.3552 79.7975 50.275C79.8073 46.4775 79.0489 42.7165 77.5673 39.2153C76.0857 35.7141 73.9111 32.5438 71.1722 29.8922C70.8974 29.6224 70.5262 29.4711 70.1397 29.4718H70.1281C69.9344 29.4724 69.7428 29.5115 69.5646 29.5866C69.3863 29.6617 69.225 29.7715 69.09 29.9093C68.8168 30.1864 68.6653 30.5594 68.6688 30.9471C68.6723 31.3347 68.8304 31.7054 69.1086 31.9775C71.5669 34.3575 73.5192 37.203 74.8494 40.3455C76.1796 43.488 76.8606 46.8633 76.8526 50.2719C76.8355 55.57 75.1768 60.7348 72.101 65.065C68.8991 62.0868 65.1831 59.7049 61.1312 58.0331L61.5749 57.6042C62.8903 56.3409 63.9663 54.8532 64.7515 53.2121C64.9094 52.8629 64.9229 52.4664 64.7895 52.1073C64.656 51.7483 64.386 51.4552 64.0375 51.2915C63.689 51.1278 63.2899 51.1063 62.9255 51.2315C62.5612 51.3567 62.2607 51.6189 62.0888 51.9615C61.4568 53.2863 60.5884 54.4867 59.5257 55.5046L58.4183 56.5693C58.1364 56.8411 57.9277 57.1792 57.8115 57.5519C57.6953 57.9246 57.6756 58.3203 57.7535 58.7027C57.8315 59.0851 58.0049 59.4419 58.258 59.7405C58.5111 60.039 58.8356 60.2695 59.2019 60.4111C64.9601 62.6255 69.998 66.3619 73.7698 71.2151C72.2721 72.8123 70.6098 74.2494 68.8105 75.5029C62.6635 79.7789 55.1633 81.6987 47.6995 80.9066C40.2358 80.1146 33.3143 76.6645 28.217 71.1952C31.9876 66.3489 37.021 62.6178 42.7733 60.4055C43.1398 60.2642 43.4649 60.0337 43.7182 59.7352C43.9715 59.4367 44.1451 59.0797 44.2231 58.6971C44.3011 58.3146 44.2808 57.9188 44.1643 57.546C44.0479 57.1732 43.8392 56.8354 43.5569 56.5637L42.4495 55.4987C41.0538 54.1559 39.9997 52.5032 39.3738 50.6767C38.7478 48.8501 38.568 46.9021 38.8493 44.9931C39.1305 43.0841 39.8646 41.269 40.9912 39.6968C42.1179 38.1247 43.6048 36.8409 45.3294 35.9509C47.2817 34.9454 49.4703 34.4792 51.6664 34.6012C53.8625 34.7233 55.9855 35.429 57.8126 36.6446C59.6396 37.8603 61.1038 39.541 62.0519 41.511C63.0001 43.481 63.3972 45.6676 63.2019 47.8422C63.185 48.0334 63.2063 48.2259 63.2644 48.4089C63.3226 48.5919 63.4165 48.7619 63.5407 48.9089C63.665 49.0559 63.8175 49.177 63.989 49.2655C64.1605 49.3541 64.348 49.4087 64.5406 49.4254C64.7332 49.4421 64.9271 49.4206 65.1115 49.3629C65.2958 49.3052 65.4668 49.212 65.6149 49.0886C65.763 48.9653 65.8853 48.8143 65.9745 48.6441C66.0638 48.4739 66.1184 48.2878 66.1352 48.0966C66.3634 45.5566 65.9399 43.0005 64.9041 40.6669C63.8682 38.3333 62.2536 36.2983 60.2112 34.7513C58.1688 33.2042 55.7652 32.1956 53.2241 31.8198C50.6831 31.444 48.0875 31.7132 45.6795 32.6021C43.2715 33.491 41.1294 34.9706 39.4532 36.9032C37.777 38.8358 36.6211 41.1581 36.0935 43.6538C35.5658 46.1496 35.6834 48.7373 36.4355 51.1757C37.1876 53.614 38.5498 55.8239 40.3947 57.5986L40.8366 58.0271C36.7837 59.6986 33.0675 62.0814 29.8657 65.0608C26.5937 60.4746 24.9325 54.9475 25.1381 49.3315C25.3437 43.7155 27.4047 38.3223 31.0034 33.9839C31.2509 33.6846 31.3689 33.3003 31.3313 32.9148C31.2938 32.5293 31.1037 32.174 30.803 31.9273C30.5008 31.682 30.1133 31.5653 29.7248 31.6028C29.3362 31.6402 28.9784 31.8291 28.7295 32.1276C24.6632 37.0295 22.3608 43.1376 22.1868 49.485C22.0129 55.8324 23.9773 62.056 27.7691 67.1701C27.2521 67.7419 26.7509 68.3136 26.2743 68.9124C22.1391 63.5645 19.9078 57.0064 19.9299 50.2649C19.9316 45.7374 20.9378 41.2657 22.8769 37.1677C24.816 33.0697 27.6407 29.4459 31.1499 26.5536C34.6592 23.6612 38.7667 21.5716 43.1814 20.4328C47.5961 19.2939 52.2093 19.1341 56.6932 19.9645C57.0732 20.0259 57.4625 19.9372 57.7774 19.7174C58.0923 19.4977 58.3078 19.1642 58.3782 18.7885C58.4486 18.4129 58.3682 18.0249 58.1539 17.7075C57.9397 17.3901 57.6086 17.1685 57.2318 17.0902C55.1702 16.7105 53.0781 16.519 50.9813 16.5183C44.7835 16.5204 38.7042 18.2045 33.4009 21.3882C28.0977 24.5718 23.7722 29.134 20.8924 34.5813C18.0126 40.0287 16.688 46.1538 17.0619 52.2944C17.4358 58.435 19.4939 64.3573 23.0137 69.4208C26.5334 74.4843 31.3808 78.4963 37.0317 81.0228C42.6827 83.5494 48.9218 84.4945 55.0747 83.7557C61.2276 83.017 67.06 80.6228 71.941 76.8317C76.8221 73.0406 80.5662 67.997 82.7681 62.2466C82.9066 61.8842 82.8945 61.4821 82.7343 61.1285C82.5742 60.775 82.2792 60.499 81.9142 60.3612L81.9328 60.3713Z" fill="#091E3B" />

            <path d="M77.0456 28.5886C76.9227 28.437 76.7706 28.3112 76.5981 28.2187C76.4256 28.1262 76.236 28.0687 76.0409 28.0498C75.8457 28.031 75.6488 28.0511 75.4615 28.1088C75.2742 28.1665 75.1005 28.2607 74.9504 28.3859C74.8003 28.5111 74.6767 28.6649 74.5872 28.8381C74.4977 29.0113 74.4439 29.2002 74.429 29.3943C74.4142 29.5884 74.4387 29.7834 74.5007 29.968C74.5628 30.1526 74.6614 30.3231 74.7908 30.4694C77.8452 34.087 80.0228 38.3521 81.1559 42.9361C82.289 47.5201 82.3475 52.3009 81.3268 56.9109C81.2805 57.1245 81.2827 57.3459 81.3335 57.5585C81.3843 57.7711 81.4824 57.9696 81.6203 58.1399C81.7583 58.3101 81.9328 58.4474 82.1311 58.5422C82.3295 58.637 82.5466 58.6869 82.7667 58.6877C83.1018 58.6872 83.4266 58.5737 83.6882 58.366C83.9498 58.1583 84.1326 57.8685 84.2067 57.5442C85.3244 52.4971 85.2604 47.2629 84.0197 42.2441C82.779 37.2254 80.3947 32.5559 77.0502 28.5956L77.0456 28.5886Z" fill="#C1282D" />

            <path d="M32.244 28.5899C32.0974 28.7151 31.9772 28.8677 31.89 29.039C31.8028 29.2103 31.7505 29.3972 31.736 29.5886C31.7216 29.78 31.7455 29.9723 31.806 30.1546C31.8665 30.3369 31.9624 30.5057 32.0886 30.6511C32.2145 30.7968 32.3682 30.9162 32.5407 31.0029C32.7132 31.0895 32.9009 31.1414 33.0937 31.1557C33.2865 31.17 33.4804 31.1464 33.6639 31.0863C33.8475 31.0261 34.0172 30.9308 34.1635 30.8054C37.4151 28.0298 41.3119 26.1013 45.502 25.194C49.6922 24.2867 54.0441 24.4293 58.1649 25.6086C58.3525 25.6681 58.5502 25.6897 58.7463 25.6721C58.9425 25.6544 59.1329 25.5977 59.3067 25.5056C59.4805 25.4136 59.6341 25.288 59.7581 25.1361C59.8821 24.9841 59.9738 24.8089 60.0284 24.621C60.0831 24.4332 60.0993 24.2366 60.0759 24.0425C60.0525 23.8484 59.9901 23.6606 59.8924 23.4908C59.7947 23.321 59.664 23.1726 59.5075 23.0539C59.3509 22.9353 59.1719 22.8487 58.9812 22.7999C54.3906 21.4865 49.5426 21.3281 44.8749 22.339C40.2071 23.3498 35.8663 25.4979 32.244 28.5899Z" fill="#C1282D" />

            <path d="M70.0115 27.9839C72.0026 27.9841 73.949 27.3987 75.6047 26.3009C77.2603 25.2031 78.5511 23.6424 79.3132 21.8166C80.0753 19.9909 80.2748 17.9817 79.8866 16.0434C79.4983 14.105 78.5396 12.3247 77.1318 10.9272C75.724 9.52964 73.9302 8.57784 71.9774 8.19218C70.0246 7.80652 68.0005 8.00402 66.161 8.76026C64.3215 9.51649 62.7491 10.7973 61.6429 12.4406C60.5367 14.0838 59.9463 16.0156 59.9463 17.9919C59.9497 20.6406 61.0114 23.18 62.8983 25.0531C64.7851 26.9262 67.343 27.9801 70.0115 27.9839ZM62.8912 17.9919C62.8912 16.5937 63.3088 15.2271 64.0914 14.0645C64.8741 12.902 65.9866 11.9957 67.2881 11.4607C68.5895 10.9257 70.0214 10.7859 71.403 11.0587C72.7845 11.3316 74.0536 12.0052 75.0496 12.994C76.0456 13.9828 76.7236 15.2422 76.9982 16.6136C77.2729 17.9849 77.1318 19.4066 76.5926 20.6983C76.0533 21.99 75.1403 23.0939 73.9689 23.8705C72.7975 24.6471 71.4202 25.0614 70.0115 25.0611C68.1224 25.0592 66.3114 24.3129 64.9763 22.9863C63.6411 21.6597 62.8912 19.8614 62.8912 17.9863V17.9919Z" fill="#C1282D" />
        </svg>
    )

}
export default SignupIcon;