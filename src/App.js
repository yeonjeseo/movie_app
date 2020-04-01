
import React from "react";

function Food({ name, picture }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} />
        </div>
    );
}

const foodILike = [
    {
        name: "Kimchi",
        image:
            "https://www.google.com/url?sa=i&url=http%3A%2F%2Fjnmall.kr%2Fproduct%2F%25EC%2582%25B0%25EB%2593%25A4%25EB%259E%2598-%25EA%25B9%2580%25EC%259E%25A5-%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598-10kg%2F4986%2F&psig=AOvVaw0LHJzR1TacwcL9gDh5LwTL&ust=1585837859214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCbn8W4x-gCFQAAAAAdAAAAABAD"
    },
    {
        name: "Samgieopsal",
        image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2FnewsRead.php%3FArtNo%3D95499&psig=AOvVaw2dsGz9DQSwtLWffbJkZyOl&ust=1585837921704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDJneW4x-gCFQAAAAAdAAAAABAD"
    },
    {
        name: "Sushi",
        image:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.japanhoppers.com%2Fko%2Fall_about_japan%2Ffood%2F268%2F&psig=AOvVaw2wRbsGrBpU1b_pFkl2VIPH&ust=1585837988942000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiVjom5x-gCFQAAAAAdAAAAABAD"
    },
    {
        name: "Crap",
        image:
            "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.newsfarm.co.kr%2Fnews%2Fphoto%2F201712%2F20189_16225_1515.jpg&imgrefurl=http%3A%2F%2Fwww.newsfarm.co.kr%2Fnews%2FarticleView.html%3Fidxno%3D20189%26replyAll%3D%26reply_sc_order_by%3DC&tbnid=eK-riObnKVodmM&vet=12ahUKEwjn4MaTucfoAhXlGKYKHXrcDfEQMyhWegUIARDEAQ..i&docid=v9WSUyfMUpVZ3M&w=680&h=454&q=대게&client=safari&ved=2ahUKEwjn4MaTucfoAhXlGKYKHXrcDfEQMyhWegUIARDEAQ"
    },
    {
        name: "Steak",
        image:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fyatomo%2Fyatomo1702%2Fyatomo170200152%2F71336490-%25EC%25BB%25A4%25ED%258C%2585-%25EB%25B3%25B4%25EB%2593%259C%25EC%2597%2590-%25EB%25B0%2594%25EB%25B2%25A0%25ED%2581%2590-%25ED%2586%25A0%25EB%25A7%2588-%25ED%2598%25B8%25ED%2581%25AC-%25EC%258A%25A4%25ED%2585%258C%25EC%259D%25B4%25ED%2581%25AC.jpg&imgrefurl=https%3A%2F%2Fkr.123rf.com%2Fphoto_71336490_%25EC%25BB%25A4%25ED%258C%2585-%25EB%25B3%25B4%25EB%2593%259C%25EC%2597%2590-%25EB%25B0%2594%25EB%25B2%25A0%25ED%2581%2590-%25ED%2586%25A0%25EB%25A7%2588-%25ED%2598%25B8%25ED%2581%25AC-%25EC%258A%25A4%25ED%2585%258C%25EC%259D%25B4%25ED%2581%25AC.html&tbnid=9ZUI5Wiz0CtE6M&vet=12ahUKEwi_ypCxucfoAhUHWpQKHaxuDlwQMygYegQIARAx..i&docid=ODefQxrIhpw6IM&w=1300&h=867&q=토마호크%20스테이크&client=safari&ved=2ahUKEwi_ypCxucfoAhUHWpQKHaxuDlwQMygYegQIARAx"
    }
];

function App() {
    return (
        <div className='App'>
            {foodILike.map(dish => (
                <Food name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;
