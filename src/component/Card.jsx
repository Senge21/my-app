export const Card = () => {
  return (
    <div>
      <Container />
    </div>
  );
};
const Container = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: " 390px",
            height: "551px",
            boxShadow: " #000000 25%",
            border: "1px solid black",
            borderRadius: 10,
            position: "relative",
          }}
        >
          <img
            style={{
              width: "390px",
              height: "331px",
              boxShadow: "#000000",
              border: " 1px solid #ffffff",
              boxShadow: " #000000",
            }}
            src="https://robohash.org/numquameiuspariatur.png?size=300x300&set=set1%22"
            alt=""
          />
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              position: "absolute",
              top: "363px",
              left: "27px",
              fontFamily: "Open Sans ,sansSerif",
            }}
          >
            first lastname
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "20px",
              position: "absolute",
              top: "431px",
              left: "27px",
            }}
          >
            Employment title
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "20px",
              position: "absolute",
              top: "431px",
              left: "231px",
            }}
          >
            Gender
          </p>
          <p
            style={{
              position: "absolute",
              top: "487px",
              left: "27px",
              fontWeight: 400,
              fontSize: "20px",
              color: "#000000",
              fontFamily: "Open Sans ,sansSerif",
              width: "274px",
              height: " 29px",
            }}
          >
            Email
          </p>
        </div>
      </div>
    </div>
  );
};
