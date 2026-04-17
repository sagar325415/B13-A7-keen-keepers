import React, { useEffect, useState } from 'react';

const useFrindsData = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true); // লোডিং স্টেট অন করলাম

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {

                setTimeout(() => {
                    setFriends(data);
                    setLoading(false);
                }, 500);
            });
    }, []);
    return {friends,loading}
};

export default useFrindsData;