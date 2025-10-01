package com.example.backend.recommend.port;

import java.util.Optional;
import java.util.List;
import java.util.Map;

public interface InOutPort {

    Optional<List<Double>> get(int buildingId, int categoryId);
    void upsert(int buildingId, int categoryId, List<Double> result);
    List<InOutResult> findResults(int buildingId, List<Integer> categoryIds);
    Map<Integer, List<InOutResult>> findResultsByBidList(Map<Integer, List<Integer>> BCL);
    Optional<String> findExplanation(int buildingId, int categoryId);
    void upsertexplain(int buildingId, int categoryId, String explanation);

    // ✅ 추가: 캐시 완성도 체크용 메소드들
    int getCachedCategoryCount(int buildingId);
    List<CachedCategoryData> getAllCachedCategories(int buildingId);

    record InOutResult(int categoryId, List<Double> result) {}
    record CachedCategoryData(String categoryName, List<Double> survivalRate) {}
}
