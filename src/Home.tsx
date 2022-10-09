import {
  Text,
  Box,
  Center,
  HStack,
  Button,
  Flex,
  Spacer,
  ScrollView,
  View,
} from "native-base";
import { SafeAreaView } from "react-native";

type TimerData = {
  id: number;
  title: string;
  time: number;
  memo: string;
}[];
export function HomeScreen() {
  const timerData: TimerData = [
    { id: 1, title: "ゆでたまご", time: 120, memo: "お湯から" },
    { id: 2, title: "ほうれん草", time: 120, memo: "お湯から" },
    { id: 3, title: "オクラ", time: 120, memo: "お湯から" },
    { id: 4, title: "もやし", time: 120, memo: "お湯から" },
  ];

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

          <Text fontSize="5xl">00:00</Text>
          <Box bgColor="danger.200" w="full" p="4" marginY="6">
            <Flex direction="row" marginX="1/6">
              <Text fontSize="2xl">start</Text>
              <Spacer />
              <Text fontSize="2xl">stop</Text>
            </Flex>
          </Box>

          {timerData.map((data) => (
            <HStack space={8} justifyContent="center" key={data.id}>
              <Button
                marginBottom="12"
                variant="unstyled"
                onPress={() => console.log("press!")}
              >
                <Center
                  h="32"
                  w="32"
                  rounded="3xl"
                  borderWidth="4"
                  borderColor="warning.200"
                >
                  {data.title}
                </Center>
              </Button>
              <Button marginBottom="12" variant="unstyled">
                <Center
                  h="32"
                  w="32"
                  rounded="3xl"
                  borderWidth="4"
                  borderColor="warning.200"
                >
                  {data.title}
                </Center>
              </Button>
            </HStack>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
