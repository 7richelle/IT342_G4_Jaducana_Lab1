package com.example.miniapp.Repository;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.miniapp.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);

    boolean existsByEmail(String email);
}

