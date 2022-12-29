import {
  Text,
  Box,
  Center,
  Button,
  Flex,
  Spacer,
  ScrollView,
  View,
  FlatList,
} from "native-base";
import { useCallback, useRef, useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";

type TimerData = {
  id: string;
  title: string;
  time: number;
  memo: string;
};
export function HomeScreen() {
  const timerData: TimerData[] = [
    { id: "1", title: "ゆでたまご", time: 120, memo: "お湯から" },
    { id: "2", title: "ほうれん草", time: 100, memo: "お湯から" },
    { id: "3", title: "オクラ", time: 10, memo: "お湯から" },
    { id: "4", title: "もやし", time: 3, memo: "お湯から" },
    { id: "5", title: "ブロッコリー", time: 120, memo: "お湯から" },
    { id: "6", title: "いんげん", time: 100, memo: "お湯から" },
    { id: "7", title: "オクラ", time: 10, memo: "お湯から" },
    { id: "8", title: "もやし", time: 3, memo: "お湯から" },
  ];
  const [secondLeft, setSecondLeft] = useState(0);
  const intervalRef = useRef<any>(null);

  const clockify = () => {
    const min = Math.floor((secondLeft / 60) % 60);
    const seconds = Math.floor(secondLeft % 60);

    const displayMins = min < 10 ? `0${min}` : min;
    const displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayMins,
      displaySecs,
    };
  };
  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setSecondLeft((leftTime) => (leftTime > 0 ? leftTime - 1 : 0));
    }, 1000);
  }, []);

  if (secondLeft === 0) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const renderItem = ({ item }: any) => (
    <Button
      marginBottom="12"
      variant="unstyled"
      onPress={() => {
        setSecondLeft(item.time);
        console.log("press!");
      }}
    >
      <Center
        h="40"
        w="40"
        rounded="3xl"
        borderWidth="4"
        borderColor="warning.200"
      >
        {item.title}
        time:{item.time}
      </Center>
    </Button>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text fontSize="2xl">ゆでたいまー</Text>
          <Text fontSize="sm" marginBottom="5">
            野菜の茹で時間はシャキシャキ時間！
          </Text>

          <Text fontSize="5xl">
            {clockify().displayMins}:{clockify().displaySecs}
          </Text>
          <Box bgColor="danger.200" w="full" p="4" marginY="6">
            <Flex direction="row" marginX="1/6">
              <TouchableOpacity onPress={start}>
                <Text fontSize="2xl">start</Text>
              </TouchableOpacity>

              <Spacer />
              <TouchableOpacity
                onPress={() => {
                  stop();
                }}
              >
                <Text fontSize="2xl">stop</Text>
              </TouchableOpacity>
            </Flex>
          </Box>
          <FlatList
            data={timerData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
