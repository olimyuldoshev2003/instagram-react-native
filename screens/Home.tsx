import Header from "@/components/home/Header";
import Posts from "@/components/home/Posts";
import Stories from "@/components/home/Stories";
import React, { useRef } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

const Home = () => {
  // Create combined data for the FlatList

  const modalizeRef = useRef<Modalize>(null);

  function onOpen() {
    modalizeRef.current?.open();
    
  }

  function onClose() {
    modalizeRef.current?.close();
  }

  const feedData = [
    { id: "header", type: "header" },
    { id: "stories", type: "stories" },
    { id: "posts", type: "posts" },
  ];

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case "header":
        return <Header />;
      case "stories":
        return <Stories />;
      case "posts":
        return <Posts onOpen={onOpen} />;
      default:
        return null;
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.homeComponent}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={feedData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        {/* Modalize Bottom Sheet - Positioned absolutely outside the scroll view */}
        <Modalize
          ref={modalizeRef}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          modalStyle={styles.modal}
          adjustToContentHeight={true}
          withHandle={true}
          handlePosition="inside"
          disableScrollIfPossible={false}
        >
          <View style={styles.modalContent}>
            <Pressable style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Report</Text>
            </Pressable>
            <Pressable style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Share</Text>
            </Pressable>
            <Pressable style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Copy Link</Text>
            </Pressable>
            <Pressable style={styles.modalOption}>
              <Text style={styles.modalOptionText}>Add to Favorites</Text>
            </Pressable>
            <Pressable
              style={[styles.modalOption, styles.modalCancel]}
              onPress={onClose}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </Modalize>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeComponent: {
    backgroundColor: "#000000",
    flex: 1,
  },

  // Modalize styles
  modal: {
    backgroundColor: "#1c1c1c",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    bottom: 0,
    zIndex: 10,
  },
  modalContent: {
    padding: 20,
    paddingBottom: 30,
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  modalOptionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalCancel: {
    marginTop: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  modalCancelText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
